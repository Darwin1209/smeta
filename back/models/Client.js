const { Schema, model } = require('mongoose')

const ClientSchema = new Schema({
  name: {
    type: 'String',
    required: 'Name Client is required',
  },
  estimates: [
    {
      nameEstimate: String,
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
        default: 0,
      },
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'UserId is required',
  },
})

module.exports = model('Client', ClientSchema)
