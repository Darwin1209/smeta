import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Container, Grid } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'

import styles from './HeaderEstimate.module.css'

const HeaderEstimate = ({ header, setHeader, list }) => {
  const [value, setValue] = useState(list[0])
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e, place) => {
    setHeader(e.currentTarget.value, place)
  }

  return (
    <Container>
      <div className={styles.wrapper}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              label="Название сметы"
              value={header.name}
              onChange={(e) => handleChange(e, 'name')}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <Autocomplete
              id="combo-box-demo"
              options={list}
              onChange={(event, newValue) => {
                setValue(newValue)
                setHeader(newValue, 'client')
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue)
              }}
              getOptionLabel={(list) => `${list.name}`}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Выберите клиента"
                  variant="outlined"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Скидка"
              value={header.discount}
              onChange={(e) => handleChange(e, 'discount')}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default HeaderEstimate
