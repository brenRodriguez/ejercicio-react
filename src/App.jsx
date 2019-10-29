import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import CreditSimulator from './components/CreditSimulator/CreditSimulator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreditSimulator />;
  }
}

export default hot(module)(App);
