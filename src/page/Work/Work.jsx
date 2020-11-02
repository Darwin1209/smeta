import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'
import { Container } from '@material-ui/core'
import CreateWork from '../../components/CreateWork'
import WorkList from '../../components/WorkList'

import { addWork, renameWork } from '../../actions/WorkAction'

const Work = ({ list, addWork, renameWork, userId }) => {
  useEffect(() => {}, [])

  return (
    <Container component="main">
      <CreateWork add={addWork} userId={userId} />
      <WorkList list={list} renameWork={renameWork} userId={userId} />
    </Container>
  )
}

const mapStateToProps = (store) => ({
  list: store.work.list,
  userId: store.user.id,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addWork,
      renameWork,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Work)
