import Axios from 'axios'

export default class Services {
  _apiUrl = '/api'

  getResource = async (url, options) => {
    try {
      const res = await Axios.post(`${this._apiUrl}${url}`, { ...options })
      if (res.status !== 200) {
        throw new Error('Error in request')
      }
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  login = async (login, password) => {
    return await this.getResource('/autorization', {
      login,
      password,
    })
  }

  registration = async (login, password) => {
    return await this.getResource('/registration', {
      login,
      password,
    })
  }

  newWork = async (work, userId) => {
    return await this.getResource('/new-work', {
      ...work,
      userId,
    })
  }

  renameWork = async (work, userId) => {
    return await this.getResource('/rename-work', {
      ...work,
      userId,
    })
  }

  getUser = async (id) => {
    return await this.getResource('/get-user', {
      id,
    })
  }

  newClient = async (userId, name) => {
    return await this.getResource('/new-client', {
      userId,
      name,
    })
  }

  getClients = async (userId) => {
    return await this.getResource('/get-clients', {
      userId,
    })
  }
}
