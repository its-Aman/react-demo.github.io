import React, { Component } from 'react';
import './App.css';
import Game from "./components/gameComponent/Game";


class App extends Component {

  render() {
    return (
      <Game />
    );
  }

  componentDidMount() {
    let url = { mail: 'kumaraman7056@gmail.com' };
    console.log('%c Want to try this awesomeness', 'color: red; font-size: 20px');
    console.log(`%c Shoot a mail at ${url.mail}`, 'color: red; font-size: 20px');
  }

  componentWillUnmount() {
  }
}

export default App;
