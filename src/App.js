import React, { useState } from 'react';
import './App.css';

const ThemeContext = React.createContext('light');
ThemeContext.displayName = 'MyThemeContext'

class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    console.log('this.context value:');
    console.log(this.context);
    return <Button theme={this.context} />;
  }
}

function ThemedButton2(props) {
  return <Button theme={props.theme} />;
}
function ThemedButton4(props) {
  return <Button theme={props.theme} />;
}

function Button(props) {
  return (
    <button className={`btn ${props.theme}`}>
      This is a {props.theme === 'dark' ? 'Dark' : 'Light'} themed button.{' '}
      {props.text}
    </button>
  );
}
// Consuming Context in class as well as functional components
function Toolbar(props) {
  console.log('Theme button context type:');
  console.log(ThemedButton.contextType);
  return (
    <div>
      <ThemedButton />
      <ThemeContext.Consumer>
        {(value) => <ThemedButton4 theme={value} />}
      </ThemeContext.Consumer>
      <ThemedButton2 theme={props.theme} />

      {props.compBtn('Hi there')}
    </div>
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
  // const ThemedButton3 = (text) => <Button theme={currTheme} text={text} />;

  return (
    <div className="App">
      <button onClick={changeTheme} className="toggleBtn">
        {currTheme === 'light' ? 'Light' : 'Dark'}
      </button>
      <ThemeContext.Provider value={currTheme}>
        <Toolbar
          theme={currTheme}
          compBtn={(text) => <Button theme={currTheme} text={text} />}
        />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
