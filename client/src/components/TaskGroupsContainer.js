import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import TaskGroup from './TaskGroup'
import { notification } from 'antd'
import '../styles/TaskGroupsContainer.scss'

function TaskGroupsContainer() {

  const [taskGroups, setTaskGroupsState] = useState([])

  useEffect(() => getTaskGroups(), [])

  const getTaskGroups = () => {
    axios.get('/api/categories')
      .then(response => {
        setTaskGroupsState(response.data)
      })
      .catch(() => {
        notification.error({
          message: 'Error loading task groups'
        })
      })
  }

  const displayTaskGroups = (taskGroups) => {

    if (!taskGroups.length) return null

    return taskGroups.map((taskGroup, index) => (
      <TaskGroup key={index} title={taskGroup.title}></TaskGroup>
    ))
  }

  return (
    <div className="task-groups-container">
      {displayTaskGroups(taskGroups)}
    </div>
  )
}

const mapStateToProps = taskGroups => ({
  taskGroup: taskGroups
})

export default connect(mapStateToProps)(TaskGroupsContainer)