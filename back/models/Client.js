const { Schema, model } = require('mongoose')

const ClientSchema = new Schema({
  name: {
    type: 'String',
    required: 'Name Client is required',
  },
  estimates: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Estimate',
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'UserId is required',
  },
})

module.exports = model('Client', ClientSchema)
