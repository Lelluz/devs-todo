import React from 'react'
import ActionBar from './components/ActionBar'
import TaskGroup from './components/TaskGroup'
import './App.scss'

const App = () => (
  <div className="App">
    <ActionBar></ActionBar>
    <div className="task-group-container">
      <TaskGroup></TaskGroup>
      <TaskGroup></TaskGroup>
      <TaskGroup></TaskGroup>
    </div>
  </div>
)

export default App