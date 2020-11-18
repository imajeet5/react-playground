import React from 'react';
import './App.css';

const DataSource = {
  getComments() {
    return ['Hi', 'Awesome', 'MindBlowing'];
  },
  getBlogPost(id) {
    return `Blog with id: ${id} is awesome`;
  },
  addChangeListener(fn) {
    return null;
  },
  removeChangeListener(fn) {
    return null;
  },
};

const Comment = (props) => <div>{props.comment}</div>;
const TextBlock = (props) => <p>{props.text}</p>;

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments(),
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments(),
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment} />
        ))}
      </div>
    );
  }
}

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id),
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id),
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}

function CommentList2(props) {
  return (
    <div>
      {props.data.map((comment) => (
        <Comment comment={comment} key={comment} />
      ))}
    </div>
  );
}

function BlogPost2(props) {
  return <TextBlock text={props.data} />;
}

const CommentListWithSubscription = withSubscription(CommentList2, (DS) =>
  DS.getComments()
);

const BlogPostWithSubscription = withSubscription(BlogPost2, (DS, p) =>
  DS.getBlogPost(p.id)
);

// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

function App() {
  return (
    <div className="App">
      <CommentList />
      <BlogPost id={3} />

      <br />
      <hr />
      <div>Component generated using HOC</div>
      <hr />
      <br />
      <CommentListWithSubscription />
      <BlogPostWithSubscription id={4} />
    </div>
  );
}

export default App;
