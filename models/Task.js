const mongoose = require('mongoose')

const Schema = mongoose.Schema
const TaskSchema = new Schema({
  title: String,
  jiraCode: String,
  categoryId: String,
  notes: String,
  date: {
    type: String,
    default: Date.now()
  }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task