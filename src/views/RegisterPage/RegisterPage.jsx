import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { Row, Col, Card, Steps, Space, message, Form, Input, Select, InputNumber } from 'antd';
import { LinkedinFilled } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'moment/locale/zh-cn';

import Styles from './RegisterPage.module.scss';

import { FormSelect } from '../../components/FormSelect';
import { ContainerModel } from '../../components/ContainerModel';
import { NavBarGeneral } from '../../components/NavBarGeneral';
import { ButtonModel } from '../../components/ButtonModel';
import { SocialMedia } from '../../components/SocialMedia';

import areasList from './AreasList';
import subareasList from './SubareasList';
import coursesList from './CoursesList';
import universitiesList from './UniversitiesList';
import rules from '../shared/Rules';

const { Step } = Steps;

const MAX_AREA = 3;
const MAX_SUBAREA = 10;

const userObj = {
  0: 'mentor',
  1: 'seed',
};

export default function RegisterPage({}) {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [user, setUser] = useState(0);

  const next = useCallback(
    (data) => {
      setData(data);
      setCurrent(current + 1);
    },
    [current],
  );

  const prev = useCallback(
    (data) => {
      setData(data);
      setCurrent(current - 1);
    },
    [current],
  );

  const handleSubmit = useCallback((data) => {
    setData(data);
    message.success('Sucesso! Seu cadastro foi realizado.');
    const valuesForm = form.getFieldsValue(true);
    window.location.href = window.location.href = `/onboarding-${userObj[valuesForm.user]}`;
  }, []);

  const propsSecondStep = {
    onBack: prev,
    onSucess: handleSubmit,
    data: data,
    form: form,
    user: user,
  };

  const content = [
    <FirstStep setUser={setUser} data={data} onSucess={next} form={form} />,
    <SecondStep {...propsSecondStep} />,
  ];

  return (
    <Fragment>
      <ContainerModel width="full" color="greyFive">
        <NavBarGeneral />
        <Space direction="vertical" size={40} style={{ width: '100%' }}>
          <ContainerModel width="full" color="greyFive">
            <Row align="middle" justify="center">
              <Col xs={{ span: 20 }} sm={{ span: 19 }} md={{ span: 12 }} xl={{ span: 10 }}>
                <Space direction="vertical" size={20} style={{ width: '100%' }}>
                  <Steps current={current} responsive={false}>
                    <Step key={`content-${1}`} />
                    <Step key={`content-${2}`} />
                  </Steps>
                  <div className="steps-content">
                    <Card className={Styles.RegisterPage__Card}>{content[current]}</Card>
                  </div>
                </Space>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color="primary">
            <Row justify="center" style={{ padding: '20px 0' }}>
              <SocialMedia />
            </Row>
          </ContainerModel>
        </Space>
      </ContainerModel>
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
    xs: { span: 24 },
    sm: { span: 12 },
  };

  const onCheck = async () => {
    try {
      const values = await props.form.validateFields();
    } catch (errorInfo) {}
  };

  return (
    <Form form={props.form} layout="vertical" onFinish={props.onSucess} scrollToFirstError>
      <Row gutter={12}>
        <Col {...layoutCols}>
          <Form.Item name="name" label=" " rules={rules.name}>
            <Input placeholder="Nome" />
          </Form.Item>
        </Col>
        <Col {...layoutCols}>
          <Form.Item name="lastname" label=" " rules={rules.lastname}>
            <Input placeholder="Último nome" />
          </Form.Item>
        </Col>
      </Row>
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
      <Row>
        <Col>
          <Form.Item
            label="Celular"
            name="phoneNumber"
            rules={rules.phoneNumber}
            tooltip="Seu número de telefone oficial para que possamos nos comunicar caso necessário, utilize o número do Whatsapp para facilitar a comunicação"
          >
            <PhoneInput
              className={Styles.RegisterPage__Phone}
              country={'br'}
              preferredCountries={['br']}
              value={phoneNumber}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{ width: '35vw' }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col {...layoutCols}>
          <Form.Item
            name="user"
            rules={rules.select}
            label="Quero ser"
            tooltip="Você está se inscrevendo para ajudar jovens na função de mentor ou para ser um jovem mentorado?"
          >
            <Select onChange={(user) => props.setUser(user)} allowClear>
              <Select.Option value={0}>Mentor(a)</Select.Option>
              <Select.Option value={1}>Mentorado(a)</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col {...layoutCols}>
          <Form.Item
            label="Data de Nascimento"
            tooltip="Digite o dia (DD), mês (MM) e ano (AAAA) do seu nascimento"
            required
          >
            <Input.Group>
              <Row gutter={6}>
                <Col span={7}>
                  <Form.Item name="day" rules={rules.day}>
                    <InputNumber placeholder="DD" controls={false} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item name="month" rules={rules.month}>
                    <InputNumber placeholder="MM" controls={false} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item name="year" rules={rules.year}>
                    <InputNumber placeholder="AAAA" controls={false} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="project"
        rules={rules.select}
        label="Qual projeto você participa ?"
        tooltip="Você pode nos indicar de qual projeto você esta participando ?"
      >
        <Select allowClear>
          <Select.Option value={0}>Processo Seletivo 2022</Select.Option>
          <Select.Option value={1}>PlantYou AllYear - Direito</Select.Option>
        </Select>
      </Form.Item>
      <FormSelect name="schooling" rules={rules.select} label="Escolaridade" list={academicList} />
      <Form.Item
        label="Linkedin"
        name="linkedin"
        rules={rules.linkedin}
        tooltip="Cole aqui o link do seu perfil LinkedIn, caso tenha uma conta"
        placeholder="https://www.linkedin.com/in/exemplo"
      >
        <Input prefix={<LinkedinFilled />} />
      </Form.Item>
      <Row justify="end" align="middle">
        <Form.Item>
          <ButtonModel
            color="senary"
            width="small"
            type="primary"
            htmlType="submit"
            onClick={onCheck}
          >
            Avançar
          </ButtonModel>
        </Form.Item>
      </Row>
    </Form>
  );
}

function SecondStep(props) {
  const onCheck = async () => {
    try {
      const values = await props.forms.validateFields();
      props.onSucess;
      window.scrollTo(0, 0);
    } catch (errorInfo) {}
  };
  return (
    <Form form={props.form} layout="vertical" onFinish={props.onSucess} scrollToFirstError>
      {props.user === 0 ? <SecondStepMentor /> : <SecondStepSeed />}
      <Row justify="end" align="middle">
        <Space size={5}>
          <Form.Item>
            <ButtonModel color="senary" width="small" type="primary" onClick={props.onBack}>
              Voltar
            </ButtonModel>
          </Form.Item>
          <Form.Item>
            <ButtonModel
              color="senary"
              width="small"
              type="primary"
              htmlType="submit"
              onClick={onCheck}
            >
              Enviar
            </ButtonModel>
          </Form.Item>
        </Space>
      </Row>
    </Form>
  );
}

function SecondStepMentor() {
  return (
    <Fragment>
      <FormSelect
        name="college"
        rules={rules.select}
        label="Instituição de Ensino"
        list={universitiesList}
      />
      <FormSelect name="course" rules={rules.select} label="Curso de Formação" list={coursesList} />
      <FormSelect
        name="area"
        rules={rules.selectArea}
        label="Área de Atuação"
        list={areasList}
        tooltip={`Selecione as áreas profissionais em que você atua/trabalha. Máximo ${MAX_AREA} opções`}
        mode="multiple"
      />
      <FormSelect
        name="subarea"
        rules={rules.selectSubarea}
        label="Subárea de Atuação"
        list={subareasList}
        tooltip={`Selecione as áreas profissionais específicas em que você atua/trabalha. Máximo ${MAX_SUBAREA} opções`}
        mode="multiple"
      />
      <Form.Item
        rules={rules.company}
        name="company"
        label="Empresa"
        tooltip="Nome do local em que você trabalha"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={rules.position}
        name="position"
        label="Cargo"
        tooltip="Nome do cargo que você ocupa"
      >
        <Input />
      </Form.Item>
    </Fragment>
  );
}

function SecondStepSeed() {
  return (
    <Fragment>
      <FormSelect
        name="college"
        rules={rules.select}
        label="Instituição de Ensino"
        list={universitiesList}
      />
      <FormSelect name="course" rules={rules.select} label="Curso de Formação" list={coursesList} />
      <FormSelect
        name="area"
        rules={rules.selectArea}
        label="Área de Interesse"
        list={areasList}
        tooltip={`Selecione as áreas profissionais em que você gostaria de atuar/trabalhar. Máximo ${MAX_AREA} opções`}
        mode="multiple"
      />
      <FormSelect
        name="subarea"
        rules={rules.selectSubarea}
        label="Subárea de Interesse"
        list={subareasList}
        tooltip={`Selecione as áreas profissionais específicas em que você gostaria de atuar/trabalhar. Máximo ${MAX_SUBAREA} opções`}
        mode="multiple"
      />
    </Fragment>
  );
}

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
