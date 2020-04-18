const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

const MONGODB_URI = 'mongodb+srv://alessandro:capponcelli@devs-todo-tqzha.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/devs-todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('mongoose is connected!')
})

// Schema
const Schema = mongoose.Schema
const TaskSchema = new Schema({
  title: String,
  jiraCode: String,
  notes: String,
  date: {
    type: String,
    default: Date.now()
  }
})

// Model
const Task = mongoose.model('Task', TaskSchema)

// Saving data to db
const data = {
  title: 'Bug Magic Address',
  jiraCode: '#2643',
  notes: 'Sto cercando una soluzione, in quanto alcune parti di codice contengono bug introdotti con un aggiornamento plugin'
}

// Instance of the model
const newTask = new Task(data)

newTask.save(error => {
  if (error) {
    console.log('Ooops, something happened')
  } else {
    console.log('Data has been saved')
  }
})

// HTTP request logger
app.use(morgan('tiny'))

// Routes
app.get('/api', (req, res) => {

  Task.find({  })
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })

})

app.get('/api/name', (req, res) => {
  const data = {
    username: 'giuliano',
    age: 5
  }
  res.json(data)
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`))