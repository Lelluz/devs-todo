const mongoose = require('mongoose')

const Schema = mongoose.Schema
const CategorySchema = new Schema({
  id: Number,
  userId: Number,
  title: String
})

const Category = mongoose.model('Task', CategorySchema)

module.exports = Category