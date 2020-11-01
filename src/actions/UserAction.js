import Services from '../api/services'

const api = new Services()

export const registrFetch = (login, pass) => (dispatch) => {
  dispatch({
    type: 'REGISTRATION_FETCH',
  })
  api.registration(login, pass).then((resp) => {
    if (resp.status === 'OK') {
      const { name, id } = resp
      dispatch({
        type: 'AUTORIZATION_USER',
        payload: {
          name,
          id,
          place: 'registStatus'
        },
      })
    }
    if (resp.status === 'Duplicate') {
      dispatch({
        type: 'DUPLICATE_REGISTER',
      })
    }
  })
}

export const autorizFetch = (login, pass) => (dispatch) => {
  dispatch({
    type: 'AUTORISATION_FETCH',
  })
  api.login(login, pass).then((resp) => {
    if (resp.status === 'OK') {
      const { name, id } = resp
      dispatch({
        type: 'AUTORIZATION_USER',
        payload: {
          name,
          id,
          place: 'autorizStatus'
        },
      })
    }
    if (resp.status === 'Password') {
      dispatch({
        type: 'PASSWORD',
      })
    }
    if (resp.status === 'Not found') {
      dispatch({
        type: 'NOT_FOUND',
      })
    }
  })
}
