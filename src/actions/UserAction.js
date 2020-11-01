import Services from '../api/services'

const api = new Services()

const rememberMe = (id) => {
  localStorage.setItem('idUser', id)
}

export const registrFetch = (login, pass, rememb) => (dispatch) => {
  dispatch({
    type: 'REGISTRATION_FETCH',
  })
  api.registration(login, pass).then((resp) => {
    if (resp.status === 'OK') {
      const { name, id, jobs } = resp
      dispatch({
        type: 'AUTORIZATION_USER',
        payload: {
          name,
          id,
          place: 'registStatus',
        },
      })

      if (rememb) {
        rememberMe(id)
      }

      dispatch({
        type: 'FETCH_JOBS',
        payload: jobs,
      })
    }
    if (resp.status === 'Duplicate') {
      dispatch({
        type: 'DUPLICATE_REGISTER',
      })
    }
  })
}

export const autorizFetch = (login, pass, rememb) => (dispatch) => {
  dispatch({
    type: 'AUTORISATION_FETCH',
  })
  api.login(login, pass).then((resp) => {
    if (resp.status === 'OK') {
      const { name, id, jobs } = resp
      dispatch({
        type: 'AUTORIZATION_USER',
        payload: {
          name,
          id,
          place: 'autorizStatus',
        },
      })
      if (rememb) {
        rememberMe(id)
      }

      dispatch({
        type: 'FETCH_JOBS',
        payload: jobs,
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

export const localUser = () => (dispatch) => {
  api.getUser(localStorage.getItem('idUser')).then((resp) => {
    const { name, id, jobs } = resp
    dispatch({
      type: 'AUTORIZATION_USER',
      payload: {
        name,
        id,
      },
    })

    dispatch({
      type: 'FETCH_JOBS',
      payload: jobs,
    })
  })
}
