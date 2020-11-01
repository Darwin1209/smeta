const { Router } = require('express')
const User = require('./models/User')

const api = Router()

api.post('/registration', async (req, res) => {
  const { login, password } = req.body
  console.log(login, password)
  const user = new User({
    login,
    password,
    jobs: [],
    estimate: [],
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
  const { userId, name, price } = req.body
  const user = await User.findOne({ _id: userId })
  await user.jobs.push({ name, price })
  await user.save()
  res.json(user.jobs.pop()._id)
})

api.post('/rename-work', async (req, res) => {
  const { userId, name, price, _id } = req.body
  const user = await User.findOne({ _id: userId })
  try {
    const idx = user.jobs.findIndex((el) => el._id.toString() === _id)
    user.jobs[idx] = { name, price, _id }
    console.log(user.jobs)
    await user.save()
    res.json({ status: 'OK' })
  } catch (e) {
    console.log(e)
    res.json({ status: 'Error' })
  }
})

module.exports = api
