import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Container } from '@material-ui/core'

import CreateGoods from '../../components/CreateGoods'
import NameEstimate from '../../components/NameEstimate'

import {
  setNameEstimate,
  setNewGoods,
  renameGoods,
} from '../../actions/EstimateAction'
import GoodsList from '../../components/GoodsList'

const Estimate = ({
  name,
  listWorks,
  listGoods,
  setNewGoods,
  setNameEstimate,
  renameGoods,
}) => {
  return (
    <Container component="main" maxWidth="xl">
      <NameEstimate value={name} setValue={setNameEstimate} />
      <CreateGoods list={listWorks} setNew={setNewGoods} />
      <GoodsList
        list={listGoods}
        listWorks={listWorks}
        renameGoods={renameGoods}
      />
    </Container>
  )
}

const mapStateToProps = (store) => ({
  listWorks: store.work.list,
  listGoods: store.estimate.goods,
  name: store.estimate.name,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setNameEstimate,
      setNewGoods,
      renameGoods,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Estimate)
