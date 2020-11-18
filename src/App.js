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

function App() {
  return (
    <div className="App">
      <FancyButton>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
