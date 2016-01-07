import React, { Component } from 'react'
import { Router, Route, Link, browserHistory, Redirect } from 'react-router'

import Main from './components/Main'
import Home from './components/Home'
import Login from './components/Login'

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Redirect from="/" to="/login" />

        <Route path="/" component={Main}>
          <Route path="login" component={Login} />
        </Route>

        <Route path="/" component={Main}>
          <Route path="home" component={Home} />
        </Route>
      </Router>
    );
  }
}
