import React, { useState } from 'react'
import {
  Typography,
  Grid,
  TextField,
  Fab,
  Container,
  MenuItem,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'

import styles from './WorkList.module.css'

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

const WorkItem = ({
  name,
  price,
  _id,
  renameWork,
  userId,
  unit,
  priceWorker,
}) => {
  const [rename, setRename] = useState(false)

  const [data, setData] = useState({
    name,
    price,
    unit,
    priceWorker,
  })

  const handleChange = (e, key) => {
    setData({ ...data, [key]: e.currentTarget.value })
  }

  const handleSubmit = () => {
    if (
      data.name !== name ||
      data.price !== price ||
      data.unit !== unit ||
      data.priceWorker !== priceWorker
    ) {
      renameWork({ ...data, _id }, userId)
    }
    setRename(false)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
            disabled={!rename}
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
            disabled={!rename}
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
            disabled={!rename}
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
            disabled={!rename}
          />
        </Grid>
        <Grid item xs={1}>
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

const WorkList = ({ list, renameWork, userId }) => {
  if (list === undefined) return null

  return (
    <Container component="section" maxWidth="xl">
      <div className={styles.wrapper}>
        <Typography component="h1" variant="h5">
          Список существующих работ
        </Typography>

        <ul className={styles.list}>
          {list.map((el) => (
            <li key={el._id} className={styles.listItem}>
              <WorkItem {...el} renameWork={renameWork} userId={userId} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default WorkList
