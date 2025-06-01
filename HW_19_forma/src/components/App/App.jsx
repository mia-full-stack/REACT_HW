import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

import './App.css';

const { Title } = Typography;


function App() {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const [form] = Form.useForm();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
    form.resetFields();
  };

  return (
    <>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2}>Форма с использованием Ant Design</Title>

        <Form layout="vertical"
          form={form}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item label="Имя"
            name="name"
            rules={[{ required: true, message: 'Введите ваше имя!' }]}
          >
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Введите ваше имя"
            />
          </Form.Item>
          <Form.Item label="Описание"
            name="description"
            rules={[{ required: true, message: 'Введите описание!' }]}
          >
            <Input
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Введите описание"
            />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item>
        </Form>

        {submittedData && (
          <Card style={{ marginTop: '20px' }}>
            <Title level={4}>Отправленные данные:</Title>
            <p><strong>Имя:</strong> {submittedData.name}</p>
            <p><strong>Описание:</strong> {submittedData.description}</p>
          </Card>
        )}
      </div>

    </>
  )
}

export default App
