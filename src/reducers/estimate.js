import produce from 'immer'

const initialState = {
  goods: [],
  total: 0,
  name: '',
}

export const estimateReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case 'SET_NAME_ESTIMATE':
        draft.name = payload
        break
      case 'SET_NEW_GOODS':
        draft.goods.push({ ...payload })
        draft.total += payload.cost
        break
      default:
        break
    }
  })
