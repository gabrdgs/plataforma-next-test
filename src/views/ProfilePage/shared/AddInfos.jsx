import React, { useState, Fragment } from 'react';
import { Modal, Button, Select, Form, Radio, Space, Input } from 'antd';

const { Option } = Select;

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

export default function AddInfos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeficiency, setIsDeficiency] = useState(false);
  const [getDeficiency, setDeficiency] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeDeficiency = (event) => {
    setIsDeficiency(event.target.value);
  };

  const onChangeGetDeficiency = (event) => {
    setDeficiency(event.target.value);
  };

  return (
    <Fragment>
      <Button type="primary" onClick={showModal} className="button-profile">
        Conclua seu Cadastro
      </Button>
      <Modal
        title="Conclua seu Cadastro 📋"
        centered={true}
        visible={isModalVisible}
        okText={'Enviar'}
        cancelText={'Cancelar'}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Gênero"
            name="gender"
            rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
          >
            <Select
              showSearch
              style={{ width: 450 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="cis_woman">Mulher Cisgenero</Option>
              <Option value="trans_woman">Mulher Transgenero</Option>
              <Option value="cis_man">Homem Cisgenero</Option>
              <Option value="trans_man">Homem Transgenero</Option>
              <Option value="non-binary">Pessoa Não-binária</Option>
              <Option value="not-inform">Prefiro não informar</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Etnia"
            name="ethnicity"
            rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
          >
            <Select
              showSearch
              style={{ width: 450 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="black">Preta/Parda</Option>
              <Option value="white">Branca</Option>
              <Option value="red">Indigena</Option>
              <Option value="yellow">Amarela</Option>
              <Option value="not-inform">Prefiro não informar</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Sexualidade"
            name="sexuality"
            rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
          >
            <Select
              showSearch
              style={{ width: 450 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="hetero">Heterossexual</Option>
              <Option value="homo">Homossexual</Option>
              <Option value="bi">Pansexual</Option>
              <Option value="not-inform">Prefiro não informar</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Deficiência"
            name="deficiency"
            rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
          >
            <Radio.Group onChange={onChangeDeficiency} value={isDeficiency}>
              <Space direction="vertical">
                <Radio value={false}>Não</Radio>
                <Radio value={true}>
                  Sim
                  {isDeficiency === true ? (
                    <Input
                      placeholder="Qual?"
                      style={{ width: 200 }}
                      onChange={onChangeGetDeficiency}
                    />
                  ) : null}
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
}
