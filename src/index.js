import { Component } from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

class App extends Component {

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
