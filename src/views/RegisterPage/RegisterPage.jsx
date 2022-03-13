import React, { Fragment, useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  Steps,
  Space,
  message,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
} from 'antd';
import 'antd/dist/antd.css';
import { LinkedinFilled } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'moment/locale/zh-cn';

import { SelectOption } from '../../components/SelectOption';

import areasList from './AreasList';
import subareasList from './SubareasList';
import coursesList from './CoursesList';
import universitiesList from './UniversitiesList';

const { Step } = Steps;

export default function RegisterPage({}) {
  const [current, setCurrent] = useState(0);
  const [user, setUser] = useState(0);

  const stepsDefault = [
    {
      content: <FirstStep setUser={setUser} />,
    },
    {
      content: <SecondStepMentor />,
    },
  ];
  const stepsSeed = stepsDefault.map((item) => ({ ...item }));
  stepsSeed[1].content = <SecondStepSeed />;

  const [contentSteps, setContentSteps] = useState(stepsDefault);

  const next = () => {
    setCurrent(current + 1);
    if (user === 1) setContentSteps(stepsSeed);
    else setContentSteps(stepsDefault);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <Fragment>
      <Row align="middle" justify="center">
        <Col xs={{ span: 20 }} sm={{ span: 19 }} md={{ span: 12 }} xl={{ span: 10 }}>
          <Space direction="vertical" size={20} style={{ width: '100%' }}>
            <Steps current={current} responsive={false}>
              {contentSteps.map((item, index) => (
                <Step key={`content-${index}`} />
              ))}
            </Steps>
            <div className="steps-content">
              <Card>{contentSteps[current].content}</Card>
            </div>
            <div className="steps-buttons">
              <Row justify="end" align="middle">
                <Space size={5}>
                  {current < contentSteps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                      Próximo
                    </Button>
                  )}
                  {current > 0 && <Button onClick={() => prev()}>Anterior</Button>}
                  {current === contentSteps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => message.success('Cadastrado com sucesso!')}
                    >
                      Enviar
                    </Button>
                  )}
                </Space>
              </Row>
            </div>
          </Space>
        </Col>
      </Row>
    </Fragment>
  );
}

function FirstStep(props) {
  const [phoneNumber, setPhone] = useState('');
  const academicList = [
    { value: 'Fundamental Incompleto' },
    { value: 'Fundamental Completo' },
    { value: 'Médio Incompleto' },
    { value: 'Superior (Graduação) Incompleto' },
    { value: 'Superior (Graduação) Completo' },
    { value: 'Pós-Graduação' },
    { value: 'Mestrado' },
    { value: 'Doutorado' },
    { value: 'Pós-Doutorado' },
  ];

  const layoutCols = {
    xs: { span: 24}, 
    sm : { span: 12 }
  };

  return (
    <Form layout="vertical" scrollToFirstError>
      <Row gutter={12}>
        <Col {...layoutCols}>
          <Form.Item>
            <Input placeholder="Nome" />
          </Form.Item>
        </Col>
        <Col {...layoutCols}>
          <Form.Item>
            <Input placeholder="Último nome" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="CPF" tooltip="O CPF será utilizado como ID de usuário">
        <Input maxLength="11" minLength="11" name="documentId" showCount />
      </Form.Item>
      <Row gutter={12}>
        <Col {...layoutCols}>
          <Form.Item label="Quero ser" tooltip="Como você se define? Mentor(a) ou Mentorado(a)">
            <Select onChange={(user) => props.setUser(user)}>
              <Select.Option value={0}>Mentor(a)</Select.Option>
              <Select.Option value={1}>Mentorado(a)</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col {...layoutCols}>
          <Form.Item label="Data de Nascimento">
            <DatePicker
              placeholder="Selecione uma data"
              style={{
                width: '100%',
              }}
              format={['DD-MM-YYYY', 'DD-MM-YY']}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Escolaridade" tooltip="Qual seu grau de instrução?">
        <SelectOption list={academicList} />
      </Form.Item>
      <Form.Item
        label="Número de Celular"
        tooltip="Utilize o número do Whatsapp para facilitar a comunicação"
      >
        <PhoneInput country={'br'} value={phoneNumber} onChange={(phone) => setPhone(phone)} />
      </Form.Item>
      <Form.Item
        label="Linkedin"
        tooltip="O seu LinkedIn facilita que outros usuários conheçam mais sobre seu perfil"
      >
        <Input prefix={<LinkedinFilled />} />
      </Form.Item>
    </Form>
  );
}

function SecondStepMentor() {
  return (
    <Form layout="vertical" scrollToFirstError>
      <Form.Item label="Instituição de Ensino">
        <SelectOption list={universitiesList} orderedList />
      </Form.Item>
      <Form.Item label="Curso de Formação">
        <SelectOption list={coursesList} orderedList />
      </Form.Item>
      <Form.Item label="Área de Atuação">
        <SelectOption list={areasList} orderedList />
      </Form.Item>
      <Form.Item label="Subárea de Atuação">
        <SelectOption list={subareasList} orderedList mode="multiple" />
      </Form.Item>
      <Form.Item label="Empresa">
        <Input />
      </Form.Item>
      <Form.Item label="Cargo">
        <Input />
      </Form.Item>
    </Form>
  );
}

function SecondStepSeed() {
  return (
    <Form layout="vertical" scrollToFirstError>
      <Form.Item label="Instituição de Ensino">
        <SelectOption list={universitiesList} orderedList />
      </Form.Item>
      <Form.Item label="Curso">
        <SelectOption list={coursesList} orderedList />
      </Form.Item>
      <Form.Item label="Área de Interesse">
        <SelectOption list={areasList} orderedList />
      </Form.Item>
      <Form.Item label="Subárea de Interesse">
        <SelectOption list={subareasList} mode="multiple" orderedList />
      </Form.Item>
    </Form>
  );
}
