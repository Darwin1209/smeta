import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container } from '@material-ui/core'
import CreateWork from '../../components/CreateWork'
import WorkList from '../../components/WorkList'

import { addWork, renameWork, setFilterWork } from '../../actions/WorkAction'
import SearchWork from '../../components/SearchWork'

const Work = ({ list, addWork, renameWork, userId, setFilterWork, filter }) => {
  return (
    <Container component="main">
      <SearchWork value={filter} setValue={setFilterWork} />
      <CreateWork add={addWork} userId={userId} />
      <WorkList list={list} renameWork={renameWork} userId={userId} />
    </Container>
  )
}

const mapStateToProps = (store) => ({
  list: store.work.list.filter(({ name }) =>
    name.toLowerCase().includes(store.work.filter)
  ),
  userId: store.user.id,
  filter: store.work.filter,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addWork,
      renameWork,
      setFilterWork,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Work)
