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
    },
  ],
  estimate: [
    {
      estimateId: {
        type: Schema.Types.ObjectId,
        ref: 'Estimate',
        required: true,
      },
    },
  ],
})

module.exports = model('User', userSchema)
