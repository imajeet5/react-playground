import React from 'react';
import './App.css';
import CounterGame from './examples/CounterGame'
import Form from './examples/HandlingForm';

const element = <h1>This is JSX</h1>;

function App() {
  return (
    <div className="App">
      Start
      <CounterGame/>
      <Form/>
    </div>
  );
}

export default App;
