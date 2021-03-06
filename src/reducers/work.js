import produce from 'immer'

const initialState = {
  list: [],
  filter: '',
}

export const workReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case 'FETCH_JOBS':
        draft.list = payload
        break
      case 'ADD_WORK':
        draft.list.push(payload)
        break
      case 'RENAME_WORK':
        const idx = draft.list.findIndex((el) => el.id === payload.id)
        draft.list[idx] = { ...payload }
        break
      case 'SET_FILTER_WORK':
        draft.filter = payload
        break
      default:
        break
    }
  })
