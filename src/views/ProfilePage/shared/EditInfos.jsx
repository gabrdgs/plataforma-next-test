import React, { useState, Fragment } from 'react';
import { Modal, Button, Form, Tooltip, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import PersonalSite from './PersonalSite';

const {TextArea} = Input;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

export default function EditInfos () {
   const state = {
        comments: [],
        submitting: false,
        value: '',
      };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <Fragment>
      <Tooltip title="Editar" style={{ marginBottom: 50 }}>
        <Button
          type="text"
          shape="circle"
          icon={<EditOutlined />}
          onClick={showModal}
          className="button-profile"
        />
      </Tooltip>
      <Modal
        title="Informações Adicionais 📋"
        centered={true}
        visible={isModalVisible}
        okText={'Enviar'}
        cancelText={'Cancelar'}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          layout="vertical"
          width={1000}
        >
          <Form.Item
            label="Rápida Biografia"
            name="biography"
            rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
          >
            <TextArea showCount maxLength={250} />
          </Form.Item>
          <Form.Item
            label="Site Pessoal"
            name="personal-site"
            rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
          >
            <PersonalSite />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

