import React, { useState } from 'react'
import {
  Typography,
  Grid,
  TextField,
  Fab,
  Container,
  Box,
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'

import { toCurrency } from '../../helper/toCurrency'

import styles from './GoodsList.module.css'

const GoodsItem = ({ name, count, listWorks, id, renameGoods, cost }) => {
  const [rename, setRename] = useState(false)
  const [value, setValue] = useState(listWorks.find(el => el.name === name))
  const [inputValue, setInputValue] = useState(name)
  const [amount, setAmount] = useState(count)

  const handleSubmit = () => {
    if (value.name !== name || count !== amount) {
      const { name: nameNew, price } = value
      renameGoods(nameNew, price, +amount, price * amount, id)
    }
    setRename(false)
  }

  console.log(value)

  return (
    <form className={styles.work} onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <Autocomplete
            value={value}
            id="combo-box-demo"
            options={listWorks}
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
            disabled={!rename}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Выберите работу"
                variant="outlined"
                required
                disabled={!rename}
                value={!rename && name}
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
            disabled={!rename}
            value={rename ? amount : count}
            onChange={(e) => setAmount(+e.currentTarget.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Box alignItems="center">
            {rename
              ? value && `Сумма: ${toCurrency(value?.price * amount)}`
              : `Сумма: ${toCurrency(cost)}`}
          </Box>
        </Grid>
        <Grid item xs={2}>
          {rename ? (
            <Fab color="secondary" aria-label="check" onClick={handleSubmit}>
              <CheckIcon />
            </Fab>
          ) : (
            <Fab
              color="primary"
              aria-label="edit"
              type="button"
              onClick={() => {
                setRename(true)
              }}
            >
              <EditIcon />
            </Fab>
          )}
        </Grid>
      </Grid>
    </form>
  )
}

const GoodsList = ({ list, listWorks, renameGoods }) => {
  return (
    <Container component="section">
      <div className={styles.wrapper}>
        <Typography component="h1" variant="h5">
          Список работ по смете
        </Typography>

        <ul className={styles.list}>
          {list.map((el, id) => (
            <li key={id} className={styles.listItem}>
              <GoodsItem
                {...el}
                id={id}
                renameGoods={renameGoods}
                listWorks={listWorks}
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default GoodsList
