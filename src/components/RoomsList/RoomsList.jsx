import React, { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  AppBar,
  Tab,
  Tabs,
  Button,
  TextField,
  Grid,
} from '@material-ui/core'

import GoodsList from '../GoodsList'
import CreateGoods from '../CreateGoods'

import styles from './RoomsList.module.css'

import { toCurrency } from '../../helper/toCurrency'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const RoomsList = ({
  list = [],
  setNew,
  setNewGoods,
  renameGoods,
  listWorks,
}) => {
  const [value, setValue] = useState(0)
  const [name, setName] = useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInput = (e) => {
    setName(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setNew(name)
    setName('')
  }
  return (
    <Container component="section" className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5}>
            <p className={styles.title}>Список комнат</p>
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Название комнаты"
              variant="outlined"
              value={name}
              onChange={handleInput}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" color="primary" variant="outlined">
              Добавить комнату
            </Button>
          </Grid>
        </Grid>
      </form>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs rooms"
          variant="scrollable"
          scrollButtons="auto"
        >
          {list.map((el, idx) => {
            return <Tab label={el.name} key={idx} {...a11yProps(idx)} />
          })}
        </Tabs>
      </AppBar>

      {list.map((el, idx) => {
        return (
          <TabPanel value={value} index={idx} key={idx}>
            <CreateGoods list={listWorks} setNew={setNewGoods} roomId={idx} />
            <GoodsList
              list={el.goods}
              listWorks={listWorks}
              renameGoods={renameGoods}
              roomId={idx}
            />
            <Grid container spacing={2} className={styles.total}>
              <Grid xs={6} item></Grid>
              <Grid item xs={3}>
                <Box alignItems="center">{`Итого сумма заказчику ${toCurrency(
                  el.total
                )}`}</Box>
              </Grid>
              <Grid item xs={3}>
                <Box alignItems="center">{`Итого сумма рабочим ${toCurrency(
                  el.goods.reduce((acc, el) => el.costWorker, 0)
                )}`}</Box>
              </Grid>
            </Grid>
          </TabPanel>
        )
      })}
    </Container>
  )
}

export default RoomsList
