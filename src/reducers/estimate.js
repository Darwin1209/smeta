import produce from 'immer'

const initialState = {
  header: {
    name: '',
    client: {
      nameClient: '',
      idClient: '',
    },
    discount: 0,
  },
  total: 0,
  rooms: [],
}

class Room {
  constructor({ name }) {
    this.name = name
    this.goods = []
    this.total = this.summaryTotal(this.goods)
  }

  summaryTotal = () => {
    return this.goods.reduce((acc, { cost }) => (acc += cost), 0)
  }
}

class Good {
  constructor({ name, price, priceWorker, count, unit }) {
    this.name = name
    this.price = price
    this.priceWorker = priceWorker
    this.count = count
    this.unit = unit
    this.cost = price * count
    this.costWorker = priceWorker * count
  }
}

export const estimateReducer = (
  state = initialState,
  { type, payload, roomId, goodId, place }
) =>
  produce(state, (draft) => {
    switch (type) {
      case 'SET_HEADER_ESTIMATE':
        draft.header[place] = payload
        break
      case 'SET_NEW_ROOMS':
        draft.rooms.push({
          name: payload.name,
          goods: [],
          total: 0,
        })
        break
      case 'RENAME_ROOMS':
        draft.rooms[roomId].name = payload
        break
      case 'SET_NEW_GOODS':
        draft.rooms[roomId].goods.push(new Good({ ...payload }))
        draft.rooms[roomId].total += payload.cost
        break
      case 'RENAME_GOODS':
        draft.rooms[roomId].goods[goodId] = payload
        draft.rooms[roomId].total += payload.cost
        break
      default:
        break
    }
  })
