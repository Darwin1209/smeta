import produce from 'immer'

const initialState = {
  list: [],
}

export const workReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case 'ADD_WORK':
        draft.list.push(payload)
        break
      case 'RENAME_WORK':
        const idx = draft.list.findIndex((el) => el.id === payload.id)
        draft.list[idx] = {...payload}
        break
      default:
        break
    }
  })
