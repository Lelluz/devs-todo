import React from 'react'
import ActionBar from './ActionBar'
import TaskGroup from './TaskGroup'
import '../styles/App.scss'

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