import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Registration from "./page/Registration"
import Autorization from "./page/Autorization"

import { Container, makeStyles } from "@material-ui/core"
import Header from "./components/Header"

const useStyles = makeStyles((theme) => ({
  text: {
    display: "flex",
    justifyContent: "center",
    marginTop: "80px",
    fontSize: "32px",
  },
}))

function App() {
  const classes = useStyles()

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Container component="main" className={classes.text}>
            Для работы с приложением необходимо зарегистрироваться и
            авторизоваться
          </Container>
        </Route>
        <Route path="/registry">
          <Registration />
        </Route>
        <Route path="/autorize">
          <Autorization />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
