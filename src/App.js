import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import './app.css'
import history from './utils/history'
import Pages from './Pages'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Pages} />
        </Switch>
      </Router>
    )
  }
}

export default App