import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import { autorizFetch } from '../../actions/UserAction'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function Autorization({ autorizFetch, autorizStatus }) {
  const classes = useStyles()
  const [data, setData] = useState({
    login: '',
    password: '',
    checked: false,
  })

  if (autorizStatus === 'success') return <Redirect to="/work" />

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value })
  }

  const submitedForm = (e) => {
    e.preventDefault()
    autorizFetch(data.login, data.password, data.checked)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EmojiPeopleOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitedForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="login"
                name="login"
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Введите логин"
                autoFocus
                value={data.login}
                onChange={(e) => handleChange('login', e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Введите пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={data.password}
                onChange={(e) =>
                  handleChange('password', e.currentTarget.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
                value={data.checked}
                onChange={() => handleChange('checked', !data.checked)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Авторизация
          </Button>
        </form>
      </div>
    </Container>
  )
}

const mapStateToProps = (store) => ({
  autorizStatus: store.user.autorizStatus,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      autorizFetch,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Autorization)
