import React from 'react'
import NewTask from './NewTask'
import './ActionBar.scss'

const ActionBar = () => (
  <nav className="action-bar">
    <NewTask></NewTask>
  </nav>
);

export default ActionBar