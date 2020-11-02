import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Container, Grid } from '@material-ui/core'

import styles from './NameEstimate.module.css'

const NameEstimate = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.currentTarget.value)
  }

  return (
    <Container>
      <div className={styles.wrapper}>
        <Grid container>
          <Grid item xs={5}>
            <TextField
              label="Название сметы"
              value={value}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default NameEstimate
