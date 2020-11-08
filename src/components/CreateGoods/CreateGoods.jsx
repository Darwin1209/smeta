import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Container,
  Typography,
  Fab,
  Box,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Autocomplete from '@material-ui/lab/Autocomplete'

import { toCurrency } from '../../helper/toCurrency'

import styles from './CreateGoods.module.css'

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

const CreateGoods = ({ list, setNew, roomId }) => {
  const [value, setValue] = useState()
  const [inputValue, setInputValue] = useState('')
  const [amount, setAmount] = useState(0)

  if (list.length === 0)
    return (
      <Container component="main" maxWidth="xl">
        <Typography component="h1" variant="h2">
          Для начала необходимо создать работы
        </Typography>
      </Container>
    )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (amount === 0 || inputValue === '') {
      return
    }
    const { price, name, priceWorker } = value
    setNew(
      name,
      price,
      priceWorker,
      +amount,
      price * amount,
      priceWorker * amount,
      roomId
    )
    setValue()
    setInputValue('')
    setAmount(0)
  }

  return (
    <Container component="section">
      <div className={styles.wrapper}>
        <Typography component="h1" variant="h5">
          Выберите вид работы
        </Typography>
        <form className={styles.work} onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <Autocomplete
                id="combo-box-demo"
                options={list}
                onChange={(event, newValue) => {
                  setValue(newValue)
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue)
                }}
                getOptionLabel={(option) =>
                  `${option.name} ${toCurrency(option.price)}`
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Выберите работу"
                    variant="outlined"
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Количество"
                variant="outlined"
                type="number"
                fullWidth
                required
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={1}>
              <Box alignItems="">
                {`${units.find((el) => el.value === value?.unit)?.label || ''}`}
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box alignItems="center">
                {value &&
                  amount &&
                  `Заказчику: ${toCurrency(value?.price * amount)}`}
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box alignItems="center">
                {value &&
                  amount &&
                  `Рабочим: ${toCurrency(value?.priceWorker * amount)}`}
              </Box>
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

export default CreateGoods
