import React from 'react'
import { Card } from 'antd';
import './Task.scss';
import EditTask from './EditTask';

const Task = () => (
  <div className="task">
    <Card title="TITOLO" extra={<EditTask></EditTask>} style={{ width: 300 }}>
      <p>Jira code: #00000</p>
    </Card>
  </div>
);

export default Task