import React from 'react';
import './App.css';

const ref = React.createRef();

function FancyButton(props) {
  console.log(ref);
  function handleClick() {
    console.log(ref);
  }
  console.log(props.ref);
  return (
    <button ref={ref} className="FancyButton" onClick={handleClick}>
      {props.children}
    </button>
  );
}
// const FancyButton = React.forwardRef((props, reff) => {
//   console.log(ref);
//   function handleClick() {
//     console.log(ref);
//   }
//   return (
//     <button ref={ref} className="FancyButton" onClick={handleClick}>
//       {props.children}
//     </button>
//   );
// });

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <FancyButton>Fancy Button</FancyButton>
      <CustomTextInput />
    </div>
  );
}

export default App;
