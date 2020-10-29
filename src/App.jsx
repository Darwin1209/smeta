import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Registration from "./page/Registration"
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Registration />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
