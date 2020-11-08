export const setHeaderEstimate = (payload, place) => ({
  type: 'SET_HEADER_ESTIMATE',
  payload,
  place,
})

export const setNewGoods = (
  name,
  price,
  priceWorker,
  count,
  cost,
  costWorker,
  unit,
  roomId
) => (dispatch) => {
  dispatch({
    type: 'SET_NEW_GOODS',
    payload: {
      name,
      price,
      priceWorker,
      count,
      cost,
      costWorker,
      unit,
    },
    roomId,
  })
}

export const renameGoods = (
  name,
  price,
  count,
  cost,
  costWorker,
  unit,
  goodId,
  roomId
) => ({
  type: 'RENAME_GOODS',
  payload: {
    name,
    price,
    count,
    cost,
    costWorker,
    unit,
  },
  goodId,
  roomId,
})

export const setNewRooms = (name) => ({
  type: 'SET_NEW_ROOMS',
  payload: {
    name,
  },
})
