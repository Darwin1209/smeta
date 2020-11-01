import produce from 'immer'

const initialState = {
  name: 'anonim',
  id: undefined,
  registStatus: 'await',
  autorizStaus: 'await',
}

export const userReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case 'REGISTRATION_FETCH':
        draft.registStatus = 'fetch'
        break
      case 'AUTORIZATION_USER':
        let { name, id, place } = payload
        draft[place] = 'success'
        draft.name = name
        draft.id = id
        break
      case 'DUPLICATE_REGISTER':
        draft.registStatus = 'duplicate'
        break
      case 'PASSWORD':
        draft.autorizStatus = 'passwod'
        break
      case 'NOT_FOUND':
        draft.autorizStatus = 'not found'
        break
      default:
        break
    }
  })
