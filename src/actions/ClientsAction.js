import Services from '../api/services'

const api = new Services()

export const newClient = (userId, name) => (dispatch) => {
  console.log(userId)
  api.newClient(userId, name).then((data) => {
    console.log(data)
  })
}
