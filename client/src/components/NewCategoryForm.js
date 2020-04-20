import React from 'react'
import { Form, Input, Button } from 'antd'
import moment from 'moment'
import axios from 'axios'
import '../styles/NewCategoryForm.scss'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: '${label} is required!'
}

function NewCategoryForm() {

  const [newCategoryForm] = Form.useForm()

  const onFinish = values => {
    console.log(values)

    axios({
      url: 'http://localhost:3000/api/saveNewCategory',
      method: 'POST',
      data: values
    })
      .then(() => {
        console.log('I dati sono stati inviati al server')
        newCategoryForm.resetFields()
      })
      .catch(() => {
        console.log('Internal server error')
      })
  }

  return (
    <Form {...layout} form={newCategoryForm} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} initialValues={{ date: moment() }}>
      <Form.Item name='title' label="Nome" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Crea
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewCategoryForm