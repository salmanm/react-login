import React, { Component } from 'react';

import 'normalize.css';
import 'styles/App.css';

export default class Main extends Component {
  render() {
    return (
      <div className="index">
        {this.props.children}
      </div>
    );
  }
}
