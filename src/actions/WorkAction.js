import Services from '../api/services'

const api = new Services()

export const addWork = (name, price, userId) => (dispatch) => {
  api.newWork({ name, price }, userId).then((id) => {
    dispatch({
      type: 'ADD_WORK',
      payload: {
        name,
        price,
        _id: id,
      },
    })
  })
}

export const renameWork = (data, userId) => (dispatch) => {
  api.renameWork(data, userId).then((resp) => {
    if (resp.status === 'OK') {
      dispatch({
        type: 'RENAME_WORK',
        payload: {
          ...data,
        },
      })
    }
  })
}
