import React, { Fragment, useState } from 'react';
import { Col, Row, Rate, Space, Modal, Button, Checkbox, Select, Radio, Form, Input,InputNumber } from 'antd';
import Image from 'next/image';
import { Paragraph } from '../../../components/Paragraph';
import { Heading } from '../../../components/Heading';

import { InfoCircleOutlined } from '@ant-design/icons';
import rules from '../../RegisterPage/Rules';

const { Option } = Select;

const StepAssessment = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <Form form={props.form}>
      <Form.Item name={props.content.id} style={{padding:"50px"}}>
        <Heading alignment="center" color="purple">
          {props.content.title}
        </Heading>
        <Space direction="vertical" size={0}>
          <Paragraph size="large" alignment="center">
            <Col span={25}>{props.content.subtitle}</Col>
          </Paragraph>
          <Row align="center">
           <StepChannel content={props.content} />
          </Row>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default StepAssessment;

const StepChannel = (props) => {
  const [firstValue, setFirst] = useState(0);

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const onChange = (event) => {
    setFirst(event.target.value);
  };


  return (
    <Fragment>
      <Space direction="vertical" size={[30, 30]}>
        {props.content.options == "infos" ? 
        <div>
          <Form style={{marginTop:"20px"}}>
            <Form.Item>
            <Form.Item label="CPF" tooltip="Preencha esse campo com seu número de CPF">
        <Form.Item name="cpf" noStyle rules={rules.cpf}>
          <InputNumber
            style={{ width: '100%', height: '32px' }}
            placeholder="XXX.XXX.XXX-XX"
            size="middle"
            controls={false}
            minLength={13}
            maxLength={15}
            formatter={(value) => `${cpfMask(value)}`}
            parser={(value) => value.replace(/[^\d]+/g, '')}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Seu Email"
        name="email"
        tooltip="Preencha aqui com seu melhor endereço de e-mail"
        rules={rules.email}
      >
        <Input placeholder="Email" />
      </Form.Item>

            </Form.Item>
          </Form>
        </div>: 
        props.content.options.map((item, index) => ( 
          <div>
            <Radio.Group onChange={onChange} value={firstValue} key={`q-${index}`}>
              <Space direction="vertical" size={20}>
                <Radio value={index + 1} key={`o-${index}`}>
                  {item}
                </Radio>
              </Space>
            </Radio.Group>
          </div> 
        ))}
      </Space>
    </Fragment>
  );
};

const cpfMask = (value) => {
  let valueString = value;
  if (valueString.length == 10) valueString = `0${value}`;
  {
    return valueString
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }
};

