import React from 'react'
import Task from './Task'
import '../styles/TaskGroup.scss'

const TaskGroup = () => (
  <div className="task-group">
    <div className="title">
      <h3>TITOLO</h3>
    </div>
    <div className="content">
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </div>
  </div>
);

export default TaskGroup