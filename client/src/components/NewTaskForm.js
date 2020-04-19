import React from 'react'
import { Form, Input, Select, DatePicker, Button } from 'antd'
import moment from 'moment'
import axios from 'axios'
import '../styles/NewTaskForm.scss'

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: '${label} is required!'
};

function NewTaskForm () {

  const onFinish = values => {
    console.log(values)

    axios({
      url: 'http://localhost:3000/api/saveNewTask',
      method: 'POST',
      data: values
    })
      .then(() => {
        console.log('I dati sono stati inviati al server');
      })
      .catch(() => {
        console.log('Internal server error');
      })
  };

  const onChangeDate = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  const onOk = (value) => {
    console.log('onOk: ', value);
  }

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} initialValues={{ date: moment() }}>
      <Form.Item name='title' label="Titolo" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='jiraCode' label="Codice Jira">
        <Input />
      </Form.Item>
      <Form.Item name='categoryId' label="Categoria" rules={[{ required: true }]}>
        <Select defaultValue="Seleziona la categoria del task">
          <Option value="1">Zhejiang</Option>
          <Option value="2">Jiangsu</Option>
        </Select>
      </Form.Item>
      <Form.Item name='notes' label="Note">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name='date' label="Data" rules={[{ required: true }]}>
        <DatePicker showTime onChange={onChangeDate} onOk={onOk} />
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