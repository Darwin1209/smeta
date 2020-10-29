import Axios from 'axios';

export default class Services {
  _apiUrl = '/api';

  getResource = async (url, options) => {
    try {
      const res = await Axios.post(
        `${this._apiUrl}${url}`,
        method === 'post' && { ...options }
      );
      if (res.status !== 200) {
        throw new Error('Error in request');
      }
      const result = await res.data;
      return result;
    } catch (err) {
      console.error(error);
    }
  };

  login = async (login, password) => {
    await this.getResource('/autorization', {
      login,
      password,
    });
  };
}
