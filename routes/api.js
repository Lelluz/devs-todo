const express = require('express')
const router = express.Router()

const Task = require('../models/Task')

router.get('/', (req, res) => {

  Task.find({  })
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/name', (req, res) => {
  const data = {
    username: 'giuliano',
    age: 5
  }
  res.json(data)
})

module.exports = router