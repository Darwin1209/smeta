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
    res.json({ status: 'OK', name: user.login, id: user._id })
  }
})

module.exports = api
