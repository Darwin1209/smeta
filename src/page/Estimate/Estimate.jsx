import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Container } from '@material-ui/core'

import CreateGoods from '../../components/CreateGoods'
import HeaderEstimate from '../../components/HeadeEstimate'

import {
  setHeaderEstimate,
  setNewGoods,
  renameGoods,
} from '../../actions/EstimateAction'
import GoodsList from '../../components/GoodsList'
import { useEffect } from 'react'

const Estimate = ({
  header,
  listWorks,
  listRooms,
  listClients,
  setNewGoods,
  setHeaderEstimate,
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
      <CreateGoods list={listWorks} setNew={setNewGoods} />
      <GoodsList
        list={listRooms}
        listWorks={listWorks}
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
      renameGoods,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Estimate)
