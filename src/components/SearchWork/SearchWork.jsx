import React from 'react'
import { Grid, TextField, Typography, Container } from '@material-ui/core'

import styles from './SearchWork.module.css'

const SearchWork = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.currentTarget.value.toLowerCase())
  }

  return (
    <Container component="section" maxWidth="xl">
      <div className={styles.wrapper}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={8}>
            <TextField
              value={value}
              onChange={handleChange}
              variant="outlined"
              label={'Фильтрация'}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Введите текст для фильтрации</Typography>
          </Grid>
        </Grid>
    </div>
      </Container>
  )
}

export default SearchWork
