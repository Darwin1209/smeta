export const setNameEstimate = (name) => ({
  type: 'SET_NAME_ESTIMATE',
  payload: name,
})

export const setNewGoods = (name, price, count, cost) => (dispatch) => {
  dispatch({
    type: 'SET_NEW_GOODS',
    payload: {
      name,
      price,
      count,
      cost,
    },
  })
}

export const renameGoods = (name, price, count, cost, id) => ({
  type: 'RENAME_GOODS',
  payload: {
    name,
    price,
    count,
    cost,
  },
  id,
})
