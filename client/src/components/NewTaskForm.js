import React, { useState, useEffect } from 'react'
import { Form, Input, Select, DatePicker, Button, notification} from 'antd'
import moment from 'moment'
import axios from 'axios'
import '../styles/NewTaskForm.scss'

const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: '${label} is required!'
}

function NewTaskForm() {

  const [newTaskForm] = Form.useForm()

  const [categories, setCategoriesState] = useState([])

  useEffect(() => getCategories(), [])

  const onFinish = values => {
    console.log(values)

    axios({
      url: 'http://localhost:3000/api/saveNewTask',
      method: 'POST',
      data: values
    })
      .then(() => {
        console.log('I dati sono stati inviati al server')
        newTaskForm.resetFields()
      })
      .catch(() => {
        console.log('Internal server error')
      })
  }

  const getCategories = () => {
    axios.get('/api/categories')
    .then(response => {
      setCategoriesState(response.data)
      console.log(response.data)
    })
    .catch(() => {
      notification.error({
        message: 'Error loading categories'
      })
    })
  }

  const displayCategories = (categories) => {

    if (!categories.length) return null

    return categories.map((category, index) => (
      <Option key={index} value={category._id}>{category.title}</Option>
    ))
  }

  const onChangeDate = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  const onOkDate = (value) => {
    console.log('onOk: ', value);
  }

  return (
    <Form {...layout} form={newTaskForm} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} initialValues={{ date: moment() }}>
      <Form.Item name='title' label="Titolo" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='jiraCode' label="Codice Jira">
        <Input />
      </Form.Item>
      <Form.Item name='categoryId' label="Categoria" rules={[{ required: true }]}>
        <Select defaultValue="Seleziona la categoria del task">
          {displayCategories(categories)}
        </Select>
      </Form.Item>
      <Form.Item name='notes' label="Note">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name='date' label="Data" rules={[{ required: true }]}>
        <DatePicker showTime onChange={onChangeDate} onOk={onOkDate} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Crea
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewTaskForm