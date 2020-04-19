const mongoose = require('mongoose')

const Schema = mongoose.Schema
const CategorySchema = new Schema({
  id: Number,
  userId: Number,
  title: String
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category