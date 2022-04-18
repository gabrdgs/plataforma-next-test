import React, { Fragment, useState, useCallback } from 'react';
import { Row, Col, Card, Steps, Space, message, Form, Input, Select, InputNumber } from 'antd';
import { LinkedinFilled } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'moment/locale/zh-cn';

import Styles from './RegisterPage.module.scss';

import { FormSelect } from '../../components/FormSelect';
import { Container } from '../../components/Container';
import { NavBarGeneral } from '../../components/NavBarGeneral';
import { ButtonModel } from '../../components/ButtonModel';

import areasList from './AreasList';
import subareasList from './SubareasList';
import coursesList from './CoursesList';
import universitiesList from './UniversitiesList';

const MAX_AREA = 3;
const MAX_SUBAREA = 10;

const { Step } = Steps;

const rules = {
  name: [
    {
      required: true,
      pattern: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/,
      message: 'Por favor, preencha seu nome!',
    },
  ],
  lastname: [
    {
      required: true,
      pattern: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/,
      message: 'Por favor, preencha seu último nome!',
    },
  ],
  email: [
    {
      required: true,
      type: 'email',
      message: 'Digite um e-mail válido',
    },
  ],
  cpf: [
    {
      required: true,
      pattern: /^(?:\d*)$/,
      message: '',
    },
    {
      validator: (_, value) => cpfValidator(value),
      message: 'Digite um CPF válido!',
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: 'Digite um número telefone de válido',
    },
  ],
  select: [
    {
      required: true,
      message: 'Escolha uma opção',
    },
  ],
  day: [
    {
      required: true,
      message: '',
      pattern: /^(?:\d*)$/,
    },
    {
      validator: (_, value) => {
        if (value > 0 && value <= 31) return Promise.resolve();
        else return Promise.reject('Date is invalid');
      },
      message: 'Data inválida',
    },
  ],
  linkedin: [
    {
      required: true,
      validator: (_, value) => linkedinValidator(value),
      message: 'Digite uma URL válida para o seu perfil LinkedIn',
    },
  ],
  select: [
    {
      required: true,
      message: 'Escolha uma opção',
    },
  ],
  selectArea: [
    {
      required: true,
      message: 'Escolha ao menos uma opção',
    },
    {
      type: 'array',
      max: MAX_AREA,
      message: `Escolha no máximo ${MAX_AREA} opções`,
    },
  ],
  selectSubarea: [
    {
      required: true,
      message: 'Escolha ao menos uma opção',
    },
    {
      type: 'array',
      max: MAX_SUBAREA,
      message: `Escolha no máximo ${MAX_SUBAREA} opções`,
    },
  ],
  company: [
    {
      required: true,
      message: 'Digite a empresa em que você trabalha',
    },
  ],
  position: [
    {
      required: true,
      message: 'Digite o cargo que você ocupa',
    },
  ],
};

export default function RegisterPage({}) {
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
  }, []);

  const propsSecondStep = {
    onBack: prev,
    onSucess: handleSubmit,
    data: data,
  };

  return (
    <Fragment>
      <NavBarGeneral />
      <Container width="full">
        <Row align="middle" justify="center">
          <Col xs={{ span: 20 }} sm={{ span: 19 }} md={{ span: 12 }} xl={{ span: 10 }}>
            <Space direction="vertical" size={20} style={{ width: '100%' }}>
              <Steps current={current} responsive={false}>
                <Step key={`content-${1}`} />
                <Step key={`content-${2}`} />
              </Steps>
              <div className="steps-content">
                <Card className={Styles.RegisterPage__Card}>
                  {current === 0 ? (
                    <FirstStep setUser={setUser} data={data} onSucess={next} />
                  ) : user === 0 ? (
                    <SecondStepMentor {...propsSecondStep} />
                  ) : (
                    <SecondStepSeed {...propsSecondStep} />
                  )}
                </Card>
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
  const [form] = Form.useForm();
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
      const values = await form.validateFields();
      console.log(values);
    } catch (errorInfo) {}
  };

  return (
    <Form form={form} layout="vertical" onFinish={props.onSucess} scrollToFirstError>
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
            minLength={14}
            maxLength={14}
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
        <Col {...layoutCols}>
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
              inputStyle={{ width: '400px' }}
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
          >
            <Input.Group>
              <Row gutter={6}>
                <Col span={7}>
                  <FormSelect
                    placeholder="DD"
                    name="day"
                    rules={rules.day}
                    list={Array.from({ length: 31 }, (_, i) => i + 1)}
                    isArrayOfObjects={false}
                  />
                </Col>
                <Col span={7}>
                  <FormSelect
                    placeholder="MM"
                    name="month"
                    list={Array.from({ length: 12 }, (_, i) => i + 1)}
                    isArrayOfObjects={false}
                  />
                </Col>
                <Col span={10}>
                  <FormSelect
                    placeholder="AAAA"
                    name="year"
                    list={Array.from({ length: 123 }, (_, i) => i + 1900)}
                    isArrayOfObjects={false}
                  />
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
            color="quinary"
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

const cpfMask = (value) => {
  {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }
};

const cpfValidator = (value) => {
  if (!value) return Promise.reject('CPF Inválido 1');
  value = value.toString().replace(/[^\d]+/g, '');
  // Elimina values invalidos conhecidos
  if (
    value.length != 11 ||
    value == '00000000000' ||
    value == '11111111111' ||
    value == '22222222222' ||
    value == '33333333333' ||
    value == '44444444444' ||
    value == '55555555555' ||
    value == '66666666666' ||
    value == '77777777777' ||
    value == '88888888888' ||
    value == '99999999999'
  )
    return Promise.reject('CPF Inválido 2');
  // Valida 1o digito
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(value.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(value.charAt(9))) return Promise.reject('CPF Inválido 3 ');
  // Valida 2o digito
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(value.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(value.charAt(10))) return Promise.reject('CPF Inválido 4');
  return Promise.resolve();
};

const isRegexExactMatch = (value, regexp) => {
  const res = value.match(regexp);
  return res && res[0] && res[0] === res.input;
};

const linkedinValidator = (value) => {
  const linkedInProfileURLRegExp =
    '(https?:\\/\\/(www.)?linkedin.com\\/(mwlite\\/|m\\/)?in\\/[a-zA-Z0-9_.-]+\\/?)';
  const valueOptions = [`${value}`, `https://www.${value}`, `https://www.linkedin.com/${value}`];

  const res = valueOptions.some((item) => {
    return isRegexExactMatch(item, linkedInProfileURLRegExp);
  });
  if (res) return Promise.resolve();
  return Promise.reject('URL Inválida');
};

function SecondStepMentor(props) {
  const [form] = Form.useForm();
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      props.onSucess;
      message.success('Sucesso! Seu cadastro foi realizado.');
    } catch (errorInfo) {}
  };

  return (
    <Form form={form} layout="vertical" onFinish={props.onSucess} scrollToFirstError>
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
      <Row justify="end" align="middle">
        <Space size={5}>
          <Form.Item>
            <ButtonModel color="quinary" width="small" type="primary" onClick={props.onBack}>
              Voltar
            </ButtonModel>
          </Form.Item>
          <Form.Item>
            <ButtonModel
              color="quinary"
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

function SecondStepSeed(props) {
  const [form] = Form.useForm();
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      props.onSucess;
      message.success('Sucesso! Seu cadastro foi realizado.');
    } catch (errorInfo) {}
  };
  return (
    <Form form={form} layout="vertical" onFinish={props.onSucess} scrollToFirstError>
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
      <Row justify="end" align="middle">
        <Space size={5}>
          <Form.Item>
            <ButtonModel color="quinary" width="small" type="primary" onClick={props.onBack}>
              Voltar
            </ButtonModel>
          </Form.Item>
          <Form.Item>
            <ButtonModel
              color="quinary"
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
