import React, { useState, useCallback, Fragment } from 'react';
import { Row, Col, Card, Steps, Space, message, Form, Input, Select, InputNumber } from 'antd';
import { LinkedinFilled } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'moment/locale/zh-cn';
import moment from 'moment';

import { FormSelect } from '../src/components/FormSelect';
import { Container } from '../src/components/Container';
import { NavBarGeneral } from '../src/components/NavBarGeneral';
import { ButtonModel } from '../src/components/ButtonModel';

const MAX_AREA = 3;
const MAX_SUBAREA = 10;
const MIN_OLD = 16;
const MAX_OLD = 120;

const { Step } = Steps;

const rules = {
  day: [
    {
      required: true,
      pattern: /^(?:\d*)$/,
      validator: (_, value) => {
        if (value > 0 && value <= 31) return Promise.resolve();
        else return Promise.reject('Date is invalid');
      },
      message: 'Dia inválido',
    },
  ],
  month: [
    {
      required: true,
      pattern: /^(?:\d*)$/,
      validator: (_, value) => {
        if (value > 0 && value <= 12) return Promise.resolve();
        else return Promise.reject('Month is invalid');
      },
      message: 'Mês inválido',
    },
  ],
  year: [
    {
      required: true,
      pattern: /^(?:\d*)$/,
      validator: (_, value) => {
        const currentYear = new Date().getFullYear();
        if (value >= currentYear - MAX_OLD && value <= currentYear - MIN_OLD)
          return Promise.resolve();
        else return Promise.reject('Year is invalid');
      },
      message: 'Ano inválido',
    },
  ],
  birthdate: [
    {
      required: true,
      validator: (_, value) => birthdateValidator(value),
      message: 'Digite uma data de nascimento válida!',
    },
  ],
};

const birthdateValidator = (value) => {
  const date = moment(value);
  const check = date.isValid();
  if (check) Promise.resolve();
  else return Promise.reject('Data inválida');
};

export default function RegisterPage({}) {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [user, setUser] = useState(0);

  const next = useCallback(
    (data) => {
      setData(data);
      setCurrent(current + 1);
      console.log(data);
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
                <Card>
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
  const [birthdateValue, setBirthdateValue] = useState({ day: '', month: '', year: '' });
  const [form] = Form.useForm();
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
          <Form.Item
            label="Data de Nascimento"
            tooltip="Digite o dia (DD), mês (MM) e ano (AAAA) do seu nascimento"
            name="birthdate"
            rules={rules.birthdate}
          >
            <Input.Group>
              <Row gutter={6}>
                <Col span={7}>
                  <Form.Item name="day" rules={rules.day}>
                    <InputNumber
                      placeholder="DD"
                      controls={false}
                      style={{ width: '100%' }}
                      onChange={(value) => {
                        setBirthdateValue({
                          ...birthdateValue,
                          ['day']: value.toString(),
                          ['month']: birthdateValue.month,
                          ['year']: birthdateValue.year,
                        });
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item name="month" rules={rules.month}>
                    <InputNumber
                      placeholder="MM"
                      controls={false}
                      style={{ width: '100%' }}
                      onChange={(value) => {
                        setBirthdateValue({
                          ...birthdateValue,
                          ['day']: birthdateValue.day,
                          ['month']: value.toString(),
                          ['year']: birthdateValue.year,
                        });
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item name="year" rules={rules.year}>
                    <InputNumber
                      placeholder="AAAA"
                      controls={false}
                      style={{ width: '100%' }}
                      onChange={(value) => {
                        setBirthdateValue({
                          ...birthdateValue,
                          ['day']: birthdateValue.day,
                          ['month']: birthdateValue.month,
                          ['year']: value.toString(),
                        });
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
          <Form.Item name="birthdate" rules={rules.birthdate}>
            <Input
              hidden
              value={`${birthdateValue.year}-${birthdateValue.month}-${birthdateValue.day}`}
            />
          </Form.Item>
        </Col>
      </Row>
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
