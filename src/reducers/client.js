import produce from 'immer'

const initialState = {
  client: [],
  statusNew: 'await',
  statusFetch: 'await',
}

export const clientReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case 'NEW_CLIENT':
        draft.statusNew = 'success'
        draft.client.push(payload)
        break
      case 'FETCH_CLIENT':
        draft.statusFetch = 'succes'
        draft.client = payload
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
