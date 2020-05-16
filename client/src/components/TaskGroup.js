import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { notification } from 'antd'
import Task from './Task'
import axios from 'axios'
import '../styles/TaskGroup.scss'

function TaskGroup(props) {

  const [tasks, setTasksState] = useState([])

  useEffect(() => getTasks(), [])

  const getTasks = () => {
    axios.get('/api/tasks')
      .then(response => {
        setTasksState(response.data)
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
        <h3>{props.title}</h3>
      </div>
      <div className="content">{displayTasks(tasks)}</div>
    </div>
  )
}

const mapStateToProps = tasks => ({
  tasks: tasks
})
export default connect(mapStateToProps)(TaskGroup)