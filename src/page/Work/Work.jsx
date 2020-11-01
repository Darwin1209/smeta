import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'
import { Container } from '@material-ui/core'
import CreateWork from '../../components/CreateWork'
import WorkList from '../../components/WorkList'

import { addWork, renameWork } from '../../actions/WorkAction'

const Work = ({ list, addWork, renameWork }) => {
  useEffect(() => {
    // Запрос на сервер за работами
  }, [])

  return (
    <Container>
      <CreateWork add={addWork} />
      <WorkList list={list} renameWork={renameWork} />
    </Container>
  )
}

const mapStateToProps = (store) => ({
  list: store.work.list,
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
