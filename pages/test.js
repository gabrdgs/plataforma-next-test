import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { Row, Col, Card, Steps, Space, message, Form, Input, Select, DatePicker } from 'antd';
import * as yup from 'yup';

import { Container } from '../src/components/Container';
import { NavBarGeneral } from '../src/components/NavBarGeneral';
import { ButtonModel } from '../src/components/ButtonModel';

const { Step } = Steps;

const schema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.number().required().positive().integer().max(11).min({limit: 11 | Ref, message: string})
});

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

  useEffect(() => {
    console.log(data);
  });

  const stepsDefault = [
    {
      content: <FirstStep setUser={setUser} data={data} onSucess={next} />,
    },
    {
      content: <SecondStepMentor onBack={prev} onSucess={handleSubmit} data={data} />,
    },
  ];

  return (
    <Fragment>
      <NavBarGeneral />
      <Container width="full">
        <Row align="middle" justify="center">
          <Col xs={{ span: 20 }} sm={{ span: 19 }} md={{ span: 12 }} xl={{ span: 10 }}>
            <Space direction="vertical" size={20} style={{ width: '100%' }}>
              <Steps current={current} responsive={false}>
                {stepsDefault.map((item, index) => (
                  <Step key={`content-${index}`} />
                ))}
              </Steps>
              <div className="steps-content">
                <Card>{stepsDefault[current].content}</Card>
              </div>
            </Space>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

function FirstStep(props) {
  const [form] = Form.useForm();

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
    } catch (errorInfo) {}
  };
  const layoutCols = {
    xs: { span: 24 },
    sm: { span: 12 },
  };

  return (
    <Form form={form} name="dynamic_rule" layout="vertical" onFinish={props.onSucess}>
      <Row gutter={12}>
        <Col {...layoutCols}>
          <Form.Item
            name="name"
            label=" "
            rules={[
              {
                required: true,
                message: 'Por favor, preencha seu nome!',
              },
            ]}
          >
            <Input placeholder="Nome" />
          </Form.Item>
        </Col>
        <Col {...layoutCols}>
          <Form.Item name="lastname" label=" ">
            <Input placeholder="Último nome" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <ButtonModel
          color="quinary"
          width="small"
          type="primary"
          htmlType="submit"
          onClick={props.onSuccess}
        >
          Avançar
        </ButtonModel>
      </Form.Item>
    </Form>
  );
}

function SecondStepMentor(props) {
  const [form] = Form.useForm();
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      message.success('Sucesso! Seu cadastro foi realizado.');
    } catch (errorInfo) {}
  };
  return (
    <Form
      form={form}
      layout="vertical"
      scrollToFirstError
      onSuccess={props.onSuccess}
      onBack={props.onBack}
    >
      <Form.Item
        name="ins"
        rules={[
          {
            required: true,
            message: 'Por favor, preencha seu nome!',
          },
        ]}
        label="Instituição de Ensino"
      >
        <Input placeholder="Nome" />
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Space size={5}>
            <ButtonModel color="quinary" width="small" onClick={props.onBack}>
              Anterior
            </ButtonModel>
            <ButtonModel
              color="quinary"
              width="small"
              type="primary"
              htmlType="submit"
              onClick={onCheck}
            >
              Enviar
            </ButtonModel>
          </Space>
        </Row>
      </Form.Item>
    </Form>
  );
}

function SecondStepSeed(props) {
  return (
    <Form layout="vertical" scrollToFirstError>
      <Form.Item required label="Instituição de Ensino">
        <Input required placeholder="Nome" />
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Space size={5}>
            <ButtonModel color="quinary" width="small" onClick={() => props.prev()}>
              Anterior
            </ButtonModel>
            <ButtonModel
              color="quinary"
              width="small"
              type="primary"
              onClick={() => message.success('Sucesso! Seu cadastro foi realizado.')}
            >
              Enviar
            </ButtonModel>
          </Space>
        </Row>
      </Form.Item>
    </Form>
  );
}
