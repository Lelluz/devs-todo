import React, { useState, useEffect } from 'react'
import { notification } from 'antd';
import Task from './Task'
import axios from 'axios'
import '../styles/TaskGroup.scss'

function TaskGroup() {

  const [state, setTasks] = useState({
    tasks: []
  })

  useEffect(() => getCategories(), [])

  const getCategories = () => {
    axios.get('/api/tasks')
      .then(response => {
        const data = response.data
        setTasks(state.tasks = data)
      })
      .catch(() => {
        notification.error({
          message: 'Error loading tasks'
        })
      })
  }

  const displayTasks = (tasks) => {

    if (!tasks.length) return null

    return tasks.map((task, index) => (
      <Task key={index} title={task.title}></Task>
    ))
  }

  return (
    <div className="task-group">
      <div className="title">
        <h3>TITOLO</h3>
      </div>
      <div className="content">{displayTasks(state.tasks)}</div>
    </div>
  )
}

export default TaskGroup