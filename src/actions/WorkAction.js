import Services from '../api/services'

const api = new Services()

export const addWork = (name, price, unit, priceWorker, userId) => (
  dispatch
) => {
  api.newWork({ name, price, unit, priceWorker }, userId).then((id) => {
    dispatch({
      type: 'ADD_WORK',
      payload: {
        name,
        price,
        unit,
        priceWorker,
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

export const setFilterWork = (payload) => ({
  type: 'SET_FILTER_WORK',
  payload,
})
