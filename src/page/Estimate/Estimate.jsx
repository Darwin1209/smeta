import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Button, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HeaderEstimate from '../../components/HeadeEstimate'
import RoomsList from '../../components/RoomsList'
import CreateCSV from '../../components/CreateCSV'

import {
  setHeaderEstimate,
  setNewGoods,
  renameGoods,
  setNewRooms,
} from '../../actions/EstimateAction'

import { toCurrency } from '../../helper/toCurrency'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: '200px',
  },
}))

const Estimate = ({
  header,
  listWorks,
  listRooms,
  listClients,
  setNewGoods,
  setHeaderEstimate,
  setNewRooms,
  renameGoods,
  total,
  totalWorker,
}) => {
  useEffect(() => {}, [])
  const classes = useStyles()
  const [flag, setFlag] = useState(false)

  return (
    <Container component="main" maxWidth="xl" className={classes.wrapper}>
      <HeaderEstimate
        header={header}
        setHeader={setHeaderEstimate}
        list={listClients}
      />
      <RoomsList
        list={listRooms}
        setNew={setNewRooms}
        listWorks={listWorks}
        setNewGoods={setNewGoods}
        renameGoods={renameGoods}
      />
      <Container>
        <Grid container></Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              onClick={() => setFlag(true)}
              color="primary"
              variant="outlined"
            >
              Сохранить смету
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Box alignItems="center">{`Итого заказчику ${toCurrency(
              total
            )}`}</Box>
          </Grid>
          <Grid item xs={3}>
            <Box alignItems="center">{`Итого рабочим ${toCurrency(
              totalWorker
            )}`}</Box>
          </Grid>
        </Grid>
      </Container>

      {flag && <CreateCSV />}
    </Container>
  )
}

const mapStateToProps = (store) => ({
  listWorks: store.work.list,
  listRooms: store.estimate.rooms,
  listClients: store.client.clients,
  header: store.estimate.header,
  total: store.estimate.total,
  totalWorker: store.estimate.totalWorker,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setHeaderEstimate,
      setNewGoods,
      setNewRooms,
      renameGoods,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Estimate)
