import produce from 'immer'

const initialState = {
  clients: [],
  statusNew: 'await',
  statusFetch: 'await',
}

export const clientReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case 'NEW_CLIENT':
        draft.statusNew = 'success'
        draft.clients.push(payload)
        break
      case 'FETCH_CLIENTS':
        draft.statusFetch = 'succes'
        draft.clients = payload
        break
      case 'NEW_CLIENT_ERROR':
        draft.statusNew = 'error'
        break
      case 'FETCH_ERROR':
        draft.statusFetch = 'error'
        break
      default:
        break
    }
  })
