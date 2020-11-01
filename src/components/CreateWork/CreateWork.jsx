import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Container,
  Typography,
  Fab,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import styles from './CreateWork.module.css'

const CreateWork = ({ add, userId }) => {
  const [data, setData] = useState({
    name: '',
    price: '',
  })

  const handleChange = (e, key) => {
    setData({ ...data, [key]: e.currentTarget.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    add(data.name, data.price, userId)
    setData({
      name: '',
      price: '',
    })
  }

  return (
    <Container component="section" maxWidth="xl">
      <div className={styles.wrapper}>
        <Typography component="h1" variant="h5">
          Создание новых видов работы
        </Typography>
        <form className={styles.work} onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Введите название работы"
                variant="outlined"
                fullWidth
                value={data.name}
                onChange={(e) => handleChange(e, 'name')}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Цена"
                variant="outlined"
                type="number"
                fullWidth
                value={data.price}
                onChange={(e) => handleChange(e, 'price')}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <Fab color="primary" aria-label="add" type="submit">
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default CreateWork
