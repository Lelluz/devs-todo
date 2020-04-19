const express = require('express')
const router = express.Router()

const Task = require('../models/Task')

router.get('/api', (req, res) => {

  Task.find({  })
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/api/name', (req, res) => {
  const data = {
    username: 'giuliano',
    age: 5
  }
  res.json(data)
})

module.exports = router