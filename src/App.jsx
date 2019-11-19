import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import style from './components/CreditSimulator/CreditSimulator.scss';

import CreditSimulator from './components/CreditSimulator/CreditSimulator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div id={style.app}> <CreditSimulator /></div>;
  }
}

export default hot(module)(App);
