import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, TextField, Fab, Box } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

import { newClient } from '../../actions/ClientsAction'

const useStyles = makeStyles((theme) => ({
  form: {
    margin: '80px auto',
    width: '1000px',
    display: 'flex',
  },
  left: {
    width: '80%',
  },
  right: {
    marginLeft: '120px',
  },
}))

const Client = ({ newClient, id, status }) => {
  const classes = useStyles()
  const [name, setName] = useState('')

  if (id === undefined) return null

  const handleChange = (e) => {
    setName(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    newClient(id, name)
  }

  return (
    <Container component="main" maxWidth="xl">
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.left}>
          <TextField
            id="outlined-basic"
            label="Имя клиента"
            variant="outlined"
            type="text"
            fullWidth
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.right}>
          <Fab color="primary" aria-label="add" type="submit">
            <AddIcon />
          </Fab>
        </div>
      </form>
      <Box>
        {status === 'success' && 'Новый клиент успешно добавлен'}
        {status === 'error' && 'Произошла ошибка, попробуйте позже'}
      </Box>
    </Container>
  )
}

const mapStateToProps = (store) => ({
  id: store.user.id,
  status: store.client.statusNew,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      newClient,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Client)
