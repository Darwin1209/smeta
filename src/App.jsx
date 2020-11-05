import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, makeStyles } from '@material-ui/core'

import Registration from './page/Registration'
import Autorization from './page/Autorization'
import Estimate from './page/Estimate'
import Work from './page/Work/Work'
import Client from './page/Client'

import Header from './components/Header'

import { localUser } from './actions/UserAction'

const useStyles = makeStyles((theme) => ({
  text: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px',
    fontSize: '32px',
  },
}))

function App({ localUser }) {
  const classes = useStyles()

  useEffect(() => {
    if (localStorage.getItem('idUser') !== undefined) {
      localUser()
    }
  }, [])

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
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/estimate">
          <Estimate />
        </Route>
        <Route path="/registry">
          <Registration />
        </Route>
        <Route path="/autorize">
          <Autorization />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
      </Switch>
    </Router>
  )
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      localUser,
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(App)
