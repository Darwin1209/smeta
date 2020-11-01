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

userSchema.method('toClient', function () {
  const obj = this.toObject()

  obj.id = obj._id
  delete obj._id

  return obj
})

module.exports = model('User', userSchema)
