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
  Select,
  DatePicker,
} from 'antd';
import 'antd/dist/antd.css';
import { LinkedinFilled } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'moment/locale/zh-cn';

import Styles from './RegisterPage.module.scss'

import { SelectOption } from '../../components/SelectOption';
import { Container } from '../../components/Container';
import { NavBarGeneral } from '../../components/NavBarGeneral';
import { ButtonModel } from '../../components/ButtonModel';

import areasList from './AreasList';
import subareasList from './SubareasList';
import coursesList from './CoursesList';
import universitiesList from './UniversitiesList';
import CountriesList from './CountriesList';

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
      <NavBarGeneral/>
      <Container width="full">
      <Row align="middle" justify="center">
        <Col xs={{ span: 20 }} sm={{ span: 19 }} md={{ span: 12 }} xl={{ span: 10 }}>
          <Space direction="vertical" size={20} style={{ width: '100%' }}>
            <Steps current={current} responsive={false}>
              {contentSteps.map((item, index) => (
                <Step key={`content-${index}`} />
              ))}
            </Steps>
            <div className="steps-content">
              <Card className={Styles.RegisterPage__Card} >{contentSteps[current].content}</Card>
            </div>
            <div className="steps-buttons">
              <Row justify="end" align="middle">
                <Space size={5}>
                  {current < contentSteps.length - 1 && (
                      <ButtonModel color="quinary" className={Styles.RegisterPage__Button}
                      width='small' type="primary" onClick={() => next()}>
                        Avançar
                      </ButtonModel>
                  )}
                  {current > 0 && <ButtonModel color="quinary" className={Styles.RegisterPage__Button}
                      width='small' onClick={() => prev()}>Anterior</ButtonModel>}
                  {current === contentSteps.length - 1 && (
                    <ButtonModel
                      color="quinary"
                      width='small'
                      type="primary"
                      className={Styles.RegisterPage__Button}
                      onClick={() => message.success('Sucesso! Seu cadastro foi realizado.')}
                      href = {user === 1 ? "/onboarding-seed" : "/onboarding-mentor"}
                    >
                      Enviar
                    </ButtonModel>
                  )}
                </Space>
              </Row>
            </div>
          </Space>
        </Col>
      </Row>
      </Container>
      </Fragment>
  );
}

function FirstStep(props) {
  const [phoneNumber, setPhone] = useState('');
  const academicList = [
    { value: 'Fundamental Incompleto' },
    { value: 'Fundamental Completo' },
    { value: 'Médio Incompleto' },
    { value: 'Médio Completo' },
    { value: 'Superior (Graduação) Incompleto' },
    { value: 'Superior (Graduação) Cursando' },
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

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form form={form} layout="vertical" scrollToFirstError onFinish={onFinish}>
      <Row gutter={12}>
        <Col {...layoutCols}>
          <Form.Item label=" " required rules={[{ required: true }]}>
            <Input required placeholder="Nome" />
          </Form.Item>
        </Col>
        <Col {...layoutCols}>
          <Form.Item required label=" ">
            <Input placeholder="Último nome" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="CPF" required tooltip="Preencha esse campo com seu número de CPF">
        <Input
          maxLength="11"
          minLength="11"
          name="documentId"
          showCount
          placeholder="xxx.xxx.xxx-xx"
        />
      </Form.Item>
    
          <Form.Item
            label="Seu Email"
            required
            tooltip="Preencha aqui com seu melhor endereço de e-mail"
          >
            <Input placeholder="Email" />
          </Form.Item>
      <Row>
        <Col  {...layoutCols}>
        <Form.Item
            label="Celular"
            required
            tooltip="Seu número de telefone oficial para que possamos nos comunicar caso necessário, utilize o número do Whatsapp para facilitar a comunicação"
          >
            <PhoneInput
              className={Styles.RegisterPage__Phone}
              country={'br'}
              value={phoneNumber}
              onChange={(phone) => setPhone(phone)}
            />
          </Form.Item>
        </Col>
  
      </Row>
      <Row gutter={12}>
        <Col {...layoutCols}>
          <Form.Item
            required
            label="Quero ser"
            tooltip="Você está se inscrevendo para ajudar jovens na função de mentor ou para ser um jovem mentorado?"
          >
            <Select onChange={(user) => props.setUser(user)}>
              <Select.Option value={0}>Mentor(a)</Select.Option>
              <Select.Option value={1}>Mentorado(a)</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col {...layoutCols}>
          <Form.Item
            required
            label="Data de Nascimento"
            tooltip="O dia em que você nasceu, o campo será ordenado automaticamente ao digitar a data"
          >
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
      <Form.Item
        required
        label="Qual projeto você participa ?"
        tooltip="Você pode nos indicar de qual projeto você esta participando ?"
      >
        <Select>
          <Select.Option value={0}>Processo Seletivo 2022</Select.Option>
          <Select.Option value={1}>PlantYou AllYear - Direito</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        required
        label="Escolaridade"
        tooltip="Qual meu nível de escolaridade? Até quais desses níveis eu fui?"
      >
        <SelectOption
          list={academicList}
          value={academicList}
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        />
      </Form.Item>
      <Form.Item
        label="Linkedin"
        required
        tooltip="Cole aqui o link do seu perfil do LinkedIn, caso tenha uma conta"
      >
        <Input prefix={<LinkedinFilled />} />
      </Form.Item>
    </Form>
  );
}

function SecondStepMentor() {
  return (
    <Form layout="vertical" scrollToFirstError>
      <Form.Item required label="Instituição de Ensino">
        <SelectOption list={universitiesList} orderedList />
      </Form.Item>
      <Form.Item required label="Curso de Formação">
        <SelectOption list={coursesList} orderedList />
      </Form.Item>
      <Form.Item required label="Área de Atuação" tooltip="Máximo 3 opções">
        <SelectOption list={areasList} orderedList mode="multiple" maxOptions={3} />
      </Form.Item>
      <Form.Item required label="Subárea de Atuação" tooltip="Máximo 10 opções">
        <SelectOption list={subareasList} orderedList mode="multiple" maxOptions={10} />
      </Form.Item>
      <Form.Item required label="Empresa">
        <Input />
      </Form.Item>
      <Form.Item required label="Cargo">
        <Input />
      </Form.Item>
    </Form>
  );
}

function SecondStepSeed() {
  return (
    <Form layout="vertical" scrollToFirstError>
      <Form.Item required label="Instituição de Ensino">
        <SelectOption list={universitiesList} orderedList />
      </Form.Item>
      <Form.Item required label="Curso">
        <SelectOption required list={coursesList} orderedList />
      </Form.Item>
      <Form.Item required label="Área de Interesse" tooltip="Máximo 3 opções" maxOptions={3}>
        <SelectOption list={areasList} orderedList />
      </Form.Item>
      <Form.Item required label="Subárea de Interesse" tooltip="Máximo 10 opções" maxOptions={10}>
        <SelectOption list={subareasList} mode="multiple" orderedList />
      </Form.Item>
    </Form>
  );
}
