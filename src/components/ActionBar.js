import React from 'react'
import { Button } from 'antd'
import './ActionBar.scss'

const ActionBar = () => (
  <nav className="action-bar">
    <Button type="primary">Nuovo task</Button>    
  </nav>
);

export default ActionBar