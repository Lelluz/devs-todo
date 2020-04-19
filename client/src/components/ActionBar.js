import React from 'react'
import NewTaskModal from './NewTaskModal'
import '../styles/ActionBar.scss'

const ActionBar = () => (
  <nav className="action-bar">
    <NewTaskModal></NewTaskModal>
  </nav>
);

export default ActionBar