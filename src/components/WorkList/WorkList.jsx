import React, { useState } from 'react'
import { Typography, Grid, TextField, Fab, Container } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'

import styles from './WorkList.module.css'

const WorkItem = ({ name, price, _id, renameWork, userId }) => {
  const [rename, setRename] = useState(false)

  const [data, setData] = useState({
    name,
    price,
  })

  const handleChange = (e, key) => {
    setData({ ...data, [key]: e.currentTarget.value })
  }

  const handleSubmit = () => {
    if (data.name !== name || data.price !== price) {
      renameWork({ ...data, _id, userId })
    }
    setRename(false)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Введите название работы"
            variant="outlined"
            fullWidth
            value={data.name}
            onChange={(e) => handleChange(e, 'name')}
            disabled={!rename}
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
            disabled={!rename}
            required
          />
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

const WorkList = ({ list, renameWork, userId }) => {
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
