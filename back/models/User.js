const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  jobs: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      priceWorker: {
        type: Number,
        required: true,
      },
    },
  ],
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
  ],
})

module.exports = model('User', userSchema)



