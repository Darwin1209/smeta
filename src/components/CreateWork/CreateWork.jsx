import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Container,
  Typography,
  Fab,
  MenuItem,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import styles from './CreateWork.module.css'

const units = [
  {
    label: 'м.кв',
    value: 'KV',
  },
  {
    label: 'м.п',
    value: 'P',
  },
  {
    label: 'шт.',
    value: 'C',
  },
]

const CreateWork = ({ add, userId }) => {
  const [data, setData] = useState({
    name: '',
    price: '',
    unit: 'KV',
    priceWorker: '',
  })

  const handleChange = (e, key) => {
    if (key === 'unit') {
      setData({ ...data, [key]: e.target.value })
    } else {
      setData({ ...data, [key]: e.currentTarget.value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    add(data.name, data.price, data.unit, data.priceWorker, userId)
    setData({
      name: '',
      price: '',
      unit: '',
      priceWorker: '',
    })
  }

  return (
    <Container component="section" maxWidth="xl">
      <div className={styles.wrapper}>
        <Typography component="h1" variant="h5">
          Создание новых видов работы
        </Typography>
        <form className={styles.work} onSubmit={handleSubmit}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                label="Наименование"
                variant="outlined"
                fullWidth
                value={data.name}
                onChange={(e) => handleChange(e, 'name')}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Ед. изм."
                select
                variant="outlined"
                fullWidth
                value={data.unit}
                onChange={(e) => handleChange(e, 'unit')}
              >
                {units.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
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
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                label="Цена для рабочих"
                variant="outlined"
                type="number"
                fullWidth
                value={data.priceWorker}
                onChange={(e) => handleChange(e, 'priceWorker')}
                required
              />
            </Grid>
            <Grid item xs={1}>
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
