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

  newWork = asunc (work) => {
    const res = this.getResource('/newWork', {
      ...work
    })

    return res
  }
}
