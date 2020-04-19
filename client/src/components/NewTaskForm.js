import React from 'react'
import { Form, Input, DatePicker, Button } from 'antd'
import '../styles/NewTaskForm.scss'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!'
};

const NewTaskForm = () => {
  const onFinish = values => {
    console.log(values);
  };

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  const onOk = (value) => {
    console.log('onOk: ', value);
  }

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['task', 'title']} label="Titolo" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['task', 'jiraCode']} label="Codice Jira">
        <Input />
      </Form.Item>
      <Form.Item name={['task', 'notes']} label="Note">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={['task', 'date']} label="Data" rules={[{ required: true }]}>
        <DatePicker showTime onChange={onChange} onOk={onOk} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Crea
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewTaskForm