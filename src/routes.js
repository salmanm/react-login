import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Main from './components/Main'
import Home from './components/Home'

render((
  <Router history={browserHistory}>
    <Redirect from="/" to="/login" />

    <Route path="/" component={MainOuter}>
      <Route path="login" component={Login} />
    </Route>

    <Route path="/" component={MainInner}>
      <Route path="home" component={Home} />
    </Route>
  </Router>
), document.body)
