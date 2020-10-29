import produce from "immer"

const initialState = {
  name: "anonim",
  id: undefined,
}

export const userReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case "VERIFIVATE_USER":
        const { name, id } = payload
        draft.name = name
        draft.id = id
      default:
        break
    }
  })
