import React from 'react'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core'
import CreateGoods from '../../components/CreateGoods'
import NameEstimate from '../../components/NameEstimate'

const Estimate = ({ listWorks }) => {
  return (
    <Container component="main" maxWidth="xl">
      <NameEstimate />
      <CreateGoods list={listWorks} />
    </Container>
  )
}

const mapStateToProps = (store) => ({
  listWorks: store.work.list,
})

export default connect(mapStateToProps)(Estimate)
