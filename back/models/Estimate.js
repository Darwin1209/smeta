const { Schema, model } = require('mongoose')

const estimateSchema = new Schema({
  name: String,
  rooms: [
    {
      roomsName: {
        type: String,
        required: 'Rooms name is required',
      },
      goods: [
        {
          goodsName: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          count: {
            type: Number,
            required: true,
          },
          cost: {
            type: Number,
            required: true,
          },
        },
      ],
      roomsTotal: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: 'Total is required',
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: 'ClientId is required',
  },
})

module.exports = model('Estimate', estimateSchema)
