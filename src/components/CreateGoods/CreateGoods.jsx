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

const CreateGoods = ({ list }) => {
  const [value, setValue] = useState(list?.[0])
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

  return (
    <Container component="section">
      <div className={styles.wrapper}>
        <Typography component="h1" variant="h5">
          Выберите вид работы
        </Typography>
        <form className={styles.work} onSubmit={() => console.log('a')}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
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
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
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
            <Grid item xs={2}>
              <Box alignItems="center">
                {value && `Сумма: ${toCurrency(value?.price * amount)}`}
              </Box>
            </Grid>
            <Grid item xs={2} alignContent="center">
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
