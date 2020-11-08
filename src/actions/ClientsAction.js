import Services from '../api/services'

const api = new Services()

export const newClient = (userId, name) => (dispatch) => {
  api
    .newClient(userId, name)
    .then((data) => {
      dispatch({
        type: 'NEW_CLIENT',
        payload: {
          name: data.name,
          id: data._id,
        },
      })
    })
    .catch((e) => {
      console.error(e)
      dispatch({
        type: 'NEW_CLIENT_ERROR',
      })
    })
}
