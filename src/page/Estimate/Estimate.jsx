import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Container } from '@material-ui/core'

import CreateGoods from '../../components/CreateGoods'
import HeaderEstimate from '../../components/HeadeEstimate'
import GoodsList from '../../components/GoodsList'
import RoomsList from '../../components/RoomsList'

import {
  setHeaderEstimate,
  setNewGoods,
  renameGoods,
  setNewRooms,
} from '../../actions/EstimateAction'

import { useEffect } from 'react'

const Estimate = ({
  header,
  listWorks,
  listRooms,
  listClients,
  setNewGoods,
  setHeaderEstimate,
  setNewRooms,
  renameGoods,
}) => {
  useEffect(() => {}, [])

  return (
    <Container component="main" maxWidth="xl">
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
    </Container>
  )
}

const mapStateToProps = (store) => ({
  listWorks: store.work.list,
  listRooms: store.estimate.rooms,
  listClients: store.client.clients,
  header: store.estimate.header,
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
