import React from 'react'
import Task from './Task'
import '../styles/TaskGroup.scss'

function TaskGroup () {

  const displayCategories = (categories) => {

    if (!categories.length) return null

    return categories.map((category, index) => (
      <Task key={index} title={category.title}></Task>
    ))
  }

  return(
    <div className="task-group">
      <div className="title">
        <h3>TITOLO</h3>
      </div>
      <div className="content">{ }</div>
    </div>
  )
}

export default TaskGroup