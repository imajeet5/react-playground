import React from 'react';
import './App.css';

function Welcome(props) {
  return <h1>This is a react functional component, {props.name}</h1>;
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class ClockC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

const element = (
  <h1 className="greeting">This is JSX {new Date().toLocaleTimeString()}</h1>
);

const element2 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

function App() {
  return (
    <div className="App">
      <div>
        Start
        {element2} {element}
      </div>
      <div>
        <Welcome name={'Welcome'} />
      </div>
      <div>
        <ClockC />
      </div>
      <div>
        <Clock date={new Date()} />
      </div>
    </div>
  );
}

export default App;
