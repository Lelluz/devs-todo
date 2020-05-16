import React from 'react'
import ActionBar from './ActionBar'
import TaskGroupsContainer from './TaskGroupsContainer'
import '../styles/App.scss'

function App() {

  return (
    <div className="App">
      <ActionBar></ActionBar>
      <TaskGroupsContainer></TaskGroupsContainer>
    </div>
  )
}

export default App