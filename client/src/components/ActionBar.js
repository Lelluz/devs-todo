import React from 'react'
import NewTaskModal from './NewTaskModal'
import '../styles/ActionBar.scss'
import NewCategoryModal from './NewCategoryModal';

const ActionBar = () => (
  <nav className="action-bar">
    <NewCategoryModal></NewCategoryModal>
    <NewTaskModal></NewTaskModal>
  </nav>
);

export default ActionBar