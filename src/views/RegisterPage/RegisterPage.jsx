import React, { Fragment, useState } from 'react';
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
import moment from 'moment';
import 'moment/locale/zh-cn';

const { Step } = Steps;
const steps = [
  {
    title: 'uh',
    content: <FirstStep />,
  },
  { title: 'uhss', content: <FirstStep /> },
];

export default function RegisterPage({}) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Fragment>
      <Steps current={current} size="small" direction="horizontal">
        {steps.map((item, index) => {
          <Step key={`content-${index}`} title={item.title} />;
        })}
      </Steps>
      <Row justify="center" align="middle">
        <Steps>
          {steps.map((item, index) => {
            <Step key={`content-${index}`} title={item.title} />;
          })}
        </Steps>
        <Col span={10}>
          <div className="steps-content">
            <Card>{steps[current].content}</Card>
          </div>
        </Col>
      </Row>
      <Row justify="end" align="middle">
        <Space size={5}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Próximo
            </Button>
          )}
          {current > 0 && <Button onClick={() => prev()}>Anterior</Button>}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Cadastrado com sucesso!')}>
              Enviar
            </Button>
          )}
        </Space>
      </Row>
    </Fragment>
  );
}

function FirstStep() {
  const [phoneNumber, setPhone] = useState('');
  return (
    <Form layout="horizontal">
      <Row gutter={12}>
        <Col span={12}>
          <Form.Item>
            <Input placeholder="Nome" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input placeholder="Sobrenome" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Select placeholder="Quero ser">
          <Select.Option value={1}>Jovem</Select.Option>
          <Select.Option value={2}>Mentor</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Input maxLength="11" minLength="11" name="documentId" showCount placeholder="CPF" />
      </Form.Item>
      <Form.Item>
        <Select placeholder="Escolaridade">
          <Select.Option value={1}>Fundamental Incompleto</Select.Option>
          <Select.Option value={2}>Fundamental Completo</Select.Option>
          <Select.Option value={3}>Médio Incompleto</Select.Option>
          <Select.Option value={4}>Médio Completo</Select.Option>
          <Select.Option value={5}>Superior (Graduação) Incompleto</Select.Option>
          <Select.Option value={6}>Superior (Graduação) Completo</Select.Option>
          <Select.Option value={7}>Pós-Graduação</Select.Option>
          <Select.Option value={8}>Mestrado</Select.Option>
          <Select.Option value={9}>Doutorado</Select.Option>
          <Select.Option value={10}>Pós-Doutorado</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <DatePicker
          placeholder="Data de Nascimento"
          style={{
            width: '100%',
          }}
          format={['DD-MM-YYYY', 'DD-MM-YY']}
        />
      </Form.Item>
      <Form.Item>
        <PhoneInput country={'br'} value={phoneNumber} onChange={(phone) => setPhone(phone)} />
      </Form.Item>
      <Form.Item>
        <Input addonBefore={<LinkedinFilled />} placeholder="Linkedin" />
      </Form.Item>
    </Form>
  );
}
