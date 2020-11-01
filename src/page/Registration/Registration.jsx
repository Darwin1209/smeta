import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { registrFetch } from '../../actions/UserAction'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function Registration({ registStatus, registrFetch }) {
  const classes = useStyles()
  const [data, setData] = useState({
    login: '',
    pass: '',
    rememb: false,
  })

  if (registStatus === 'success') return <Redirect to="/work" />

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    registrFetch(data.login, data.pass, data.rememb)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                value={data.pass}
                onChange={(e) => handleChange('pass', e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
                value={data.rememb}
                onChange={() => handleChange('rememb', !data.rememb)}
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
            Регистрация
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/hey" variant="body2">
                Уже есть аккаунт, авторизоваться
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

const mapStateToProps = (store) => ({
  registStatus: store.user.registStatus,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      registrFetch,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
