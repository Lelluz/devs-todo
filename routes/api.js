const express = require('express')
const router = express.Router()

const Category = require('../models/Category')
const Task = require('../models/Task')
const User = require('../models/User')

router.get('/categories', (req, res) => {

  Category.find({})
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/tasks', (req, res) => {

  Task.find({})
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})

router.post('/saveNewTask', (req, res) => {

  const data = req.body
  const newTask = new Task(data)
  newTask.save(error => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' })
      return
    }
    return res.json({ msg: 'Your task has been saved!' })
  })
})

router.post('/saveNewCategory', (req, res) => {

  const data = req.body
  const newCategory = new Category(data)
  newCategory.save(error => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' })
      return
    }
    return res.json({ msg: 'Your category has been saved!' })
  })
})

module.exports = router