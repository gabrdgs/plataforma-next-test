import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
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
import { LinkedinFilled } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'moment/locale/zh-cn';

import { SelectOption } from '../src/components/SelectOption';
import { Container } from '../src/components/Container';

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
  xs: { span: 24 },
  sm: { span: 12 },
};

export default function Test({}) {
  const [current, setCurrent] = useState(0);
  const [user, setUser] = useState(0);
  const [phoneNumber, setPhone] = useState('');
  const { handleSubmit, control, errors } = useForm();

  const next = () => {
    setCurrent(current + 1);
    if (user === 1) setContentSteps(stepsSeed);
    else setContentSteps(stepsDefault);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container color="blue" width="full">
      <Row align="middle" justify="center">
        <Col xs={{ span: 20 }} sm={{ span: 19 }} md={{ span: 12 }} xl={{ span: 10 }}>
          <Space direction="vertical" size={20} style={{ width: '100%' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <label className="label">Firstname</label>
                <Controller
                  as={<Input placeholder="FirstName" />}
                  name="FirstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                />
                
              </div>
              <div className="steps-content">
                <Card>
                  <Form layout="vertical" scrollToFirstError>
                    <Row gutter={12}>
                      <Col {...layoutCols}>
                        <Form.Item>
                          <Controller
                            name="FirstName"
                            defaultValue=""
                            control={control}
                            rules={{
                              required: true,
                            }}
                            as={<Input placeholder="FirstName" />}
                          />
                         
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
                        <Form.Item
                          label="Quero ser"
                          tooltip="Como você se define? Mentor(a) ou Mentorado(a)"
                        >
                          <Select onChange={(user) => setUser(user)}>
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
                      label="Número de Celular"
                      tooltip="Utilize o número do Whatsapp para facilitar a comunicação"
                    >
                      <PhoneInput
                        country={'br'}
                        value={phoneNumber}
                        onChange={(phone) => setPhone(phone)}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Linkedin"
                      tooltip="O seu LinkedIn facilita que outros usuários conheçam mais sobre seu perfil"
                    >
                      <Input prefix={<LinkedinFilled />} />
                    </Form.Item>
                  </Form>
                </Card>
              </div>
              <div className="steps-buttons">
                <Row justify="end" align="middle">
                  <Space size={5}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={() => message.success('Cadastrado com sucesso!')}
                    >
                      Enviar
                    </Button>
                  </Space>
                </Row>
              </div>
            </form>
          </Space>
        </Col>
      </Row>
    </Container>
  );
}
