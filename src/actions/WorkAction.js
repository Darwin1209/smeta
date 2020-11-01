export const addWork = (name, price) => (dispatch) => {
  dispatch({
    type: 'ADD_WORK',
    payload: {
      name,
      price,
      id: new Date(),
    },
  })
}

export const renameWork = (data) => ({
  type: 'RENAME_WORK',
  payload: {
    ...data,
  },
})
