import React, { useState } from 'react';
import './App.css';

function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}
class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

function Button(props) {
  return (
    <button className={`btn ${props.theme}`}>
      This is a {props.theme === 'dark' ? 'Dark' : 'Light'} themed button
    </button>
  );
}

function App() {
  // const [currTheme, setTheme] = useState('light');
  const [currTheme, setTheme] = useState(() => 'light');

  function changeTheme() {
    // currTheme === 'light' ? setTheme('dark') : setTheme('light');
    setTheme((prevTheme) => {
      prevTheme === 'light' ? setTheme('dark') : setTheme('light');
    });
  }

  return (
    <div className="App">
      <button onClick={changeTheme} className="toggleBtn">
        {currTheme === 'light' ? 'Light' : 'Dark'}
      </button>

      <Toolbar theme={currTheme} />
    </div>
  );
}

export default App;
