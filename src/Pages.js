import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import Ninja from './pages/Ninja'


const Pages = () => {
  return (
    <Switch>
      <Route path={"/ninja"}>
        <Ninja />
      </Route>
      <Route path={"*"}>
        <Ninja />
      </Route>
    </Switch>
  )
}

export default Pages
