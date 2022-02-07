import React from 'react';
import { Modal, Button, Input, Form, Select } from 'antd';
import { Heading } from '../../../components/Heading';

export default function Help(props) {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Modal visible={props.isModalVisible} centered={true} onCancel={props.handleCancel} footer={[]}>
      <Heading>Ajuda</Heading>
      <Form
        layout="vertical"
        name="nest-messages"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Form.Item name={['user', 'name']} label="Nome Completo" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="E-mail"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'topic']} label="Assunto" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['user', 'introduction']}
          label="Conta para gente como podemos te ajudar!"
          rules={[{ required: true }]}
        >
          <Input.TextArea placeholder="Máximo 500 caracteres" rows={3} />
        </Form.Item>
        <Form.Item style={{float: 'right'}}>
          <Button
            key="confirm"
            onClick={props.handleCancel}
            style={{ marginTop: '10px' }}
          >
            Voltar
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            key="confirm"
            onClick={(props.handleConfirm)}
            style={{ margin: '10px 0 0 10px'}}
          >
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
