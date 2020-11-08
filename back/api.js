const { Router } = require('express')
const User = require('./models/User')
const Client = require('./models/Client')
const Estimate = require('./models/Estimate')

const api = Router()

api.post('/registration', async (req, res) => {
  const { login, password } = req.body
  const user = new User({
    login,
    password,
    jobs: [],
    clients: [],
  })
  try {
    await user.save()
    res.json({ status: 'OK', name: user.login, id: user._id })
  } catch (e) {
    console.error(e)
  }
})

api.post('/autorization', async (req, res) => {
  const { login, password } = req.body
  const user = await User.findOne({
    login,
  })
  if (user === null) {
    res.json({ status: 'Not found' })
  }
  if (user.password !== password) {
    res.json({ status: 'Password' })
  } else {
    res.json({ status: 'OK', name: user.login, id: user._id, jobs: user.jobs })
  }
})

api.post('/new-work', async (req, res) => {
  const { userId, name, price, priceWorker, unit } = req.body
  const result = await User.findByIdAndUpdate(
    { _id: userId },
    {
      $push: {
        jobs: {
          name,
          price,
          priceWorker,
          unit,
        },
      },
    },
    {
      new: true,
    }
  )
  res.json(result.jobs.pop()._id)
})

api.post('/rename-work', async (req, res) => {
  const { userId, name, price, _id } = req.body
  const user = await User.findOne({ _id: userId })
  try {
    const idx = user.jobs.findIndex((el) => el._id.toString() === _id)
    user.jobs[idx] = { name, price, _id }
    await user.save()
    res.json({ status: 'OK' })
  } catch (e) {
    console.log(e)
    res.json({ status: 'Error' })
  }
})

//Переписать метод на более защищённый

api.post('/get-user', async (req, res) => {
  const user = await User.findOne({ _id: req.body.id })
    .populate({ path: 'clients', select: 'name' })
    .exec()
  res.json({
    status: 'OK',
    name: user.login,
    id: user._id,
    jobs: user.jobs,
    clients: user.clients,
  })
})

api.post('/new-client', async (req, res) => {
  const { userId, name } = req.body
  if (userId === undefined || name === undefined) {
    res.json({ status: 'empty fields' })
  }
  const client = new Client({
    name,
    userId,
    estimate: [],
  })

  const user = await User.findByIdAndUpdate(
    { _id: userId },
    { $push: { clients: client._id } },
    { new: true }
  )

  await client.save()
  await user.save()

  res.json({ client })
})

// api.post('/new-estimate', async (req, res) => {

//   const client = await Client.findByIdAndUpdate(
//     { _id: clientId },
//     { $push: { estimates: estimate._id } },
//     { new: true }
//   )

//   await estimate.save()
//   await client.save()

//   res.json({ estimate, client })
// })

api.post('/get-clients', async (req, res) => {
  const { userId } = req.body

  const user = await User.findById(userId)
  const result = await user
    .populate({ path: 'clients', select: 'name' })
    .execPopulate()

  res.json({
    clients: result.clients,
  })
})

module.exports = api
