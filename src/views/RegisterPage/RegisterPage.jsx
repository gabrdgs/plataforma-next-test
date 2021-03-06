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
import { FormButton } from '../../components/FormButton';
import { SocialMedia } from '../../components/SocialMedia';

import areasList from './AreasList';
import subareasList from './SubareasList';
import coursesList from './CoursesList';
import universitiesList from './UniversitiesList';
import rules from '../shared/Rules';
import { cpfMask } from '../shared/utils';

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
    window.location.href = `/onboarding-${userObj[valuesForm.user]}`;
  }, []);

  const propsSecondStep = {
    onBack: prev,
    onSucess: handleSubmit,
    data: data,
    form: form,
    user: user,
  };

  const content = [<FirstStep setUser={setUser} />, <SecondStep {...propsSecondStep} />];

  const onCheck = async () => {
    try {
      const values = await props.form.validateFields();
    } catch (errorInfo) {}
  };

  return (
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
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={current < content.length - 1 ? next : handleSubmit}
                    scrollToFirstError
                  >
                    <Card className={Styles.RegisterPage__Card}>
                      {content[current]}
                      <FormButton
                        current={current}
                        length={content.length}
                        color="secondary"
                        onBack={prev}
                        onSucess={onCheck}
                      />
                    </Card>
                  </Form>
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
  );
}

function FirstStep(props) {
  const [phoneNumber, setPhone] = useState('');
  const academicList = [
    { value: 'Fundamental Incompleto' },
    { value: 'Fundamental Completo' },
    { value: 'M??dio Incompleto' },
    { value: 'M??dio Completo' },
    { value: 'Superior (Gradua????o) Incompleto' },
    { value: 'Superior (Gradua????o) Cursando' },
    { value: 'Superior (Gradua????o) Completo' },
    { value: 'P??s-Gradua????o' },
    { value: 'Mestrado' },
    { value: 'Doutorado' },
    { value: 'P??s-Doutorado' },
  ];
  const layoutCols = {
    xs: { span: 24 },
    sm: { span: 12 },
  };

  return (
    <Fragment>
      <Row gutter={12}>
        <Col {...layoutCols}>
          <Form.Item name="name" label=" " rules={rules.name}>
            <Input placeholder="Nome" />
          </Form.Item>
        </Col>
        <Col {...layoutCols}>
          <Form.Item name="lastname" label=" " rules={rules.lastname}>
            <Input placeholder="??ltimo nome" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="CPF" tooltip="Preencha esse campo com seu n??mero de CPF" required>
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
        tooltip="Preencha aqui com seu melhor endere??o de e-mail"
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
            tooltip="Seu n??mero de telefone oficial para que possamos nos comunicar caso necess??rio, utilize o n??mero do Whatsapp para facilitar a comunica????o"
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
            tooltip="Voc?? est?? se inscrevendo para ajudar jovens na fun????o de mentor ou para ser um jovem mentorado?"
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
            tooltip="Digite o dia (DD), m??s (MM) e ano (AAAA) do seu nascimento"
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
        label="Qual projeto voc?? participa ?"
        tooltip="Voc?? pode nos indicar de qual projeto voc?? esta participando ?"
      >
        <Select allowClear>
          <Select.Option value={0}>Processo Seletivo 2022</Select.Option>
          <Select.Option value={1}>PlantYou All Year - Carreiras na ??rea Jur??dica</Select.Option>
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
    </Fragment>
  );
}

function SecondStep(props) {
  return <Fragment>{props.user === 0 ? <SecondStepMentor /> : <SecondStepSeed />}</Fragment>;
}

function SecondStepMentor() {
  return (
    <Fragment>
      <FormSelect
        name="college"
        rules={rules.select}
        label="Institui????o de Ensino"
        list={universitiesList}
      />
      <FormSelect name="course" rules={rules.select} label="Curso de Forma????o" list={coursesList} />
      <FormSelect
        name="area"
        rules={rules.selectArea}
        label="??rea de Atua????o"
        list={areasList}
        tooltip={`Selecione as ??reas profissionais em que voc?? atua/trabalha. M??ximo ${MAX_AREA} op????es`}
        mode="multiple"
      />
      <FormSelect
        name="subarea"
        rules={rules.selectSubarea}
        label="Sub??rea de Atua????o"
        list={subareasList}
        tooltip={`Selecione as ??reas profissionais espec??ficas em que voc?? atua/trabalha. M??ximo ${MAX_SUBAREA} op????es`}
        mode="multiple"
      />
      <Form.Item
        rules={rules.company}
        name="company"
        label="Empresa"
        tooltip="Nome do local em que voc?? trabalha"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={rules.position}
        name="position"
        label="Cargo"
        tooltip="Nome do cargo que voc?? ocupa"
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
        label="Institui????o de Ensino"
        list={universitiesList}
      />
      <FormSelect name="course" rules={rules.select} label="Curso de Forma????o" list={coursesList} />
      <FormSelect
        name="area"
        rules={rules.selectArea}
        label="??rea de Interesse"
        list={areasList}
        tooltip={`Selecione as ??reas profissionais em que voc?? gostaria de atuar/trabalhar. M??ximo ${MAX_AREA} op????es`}
        mode="multiple"
      />
      <FormSelect
        name="subarea"
        rules={rules.selectSubarea}
        label="Sub??rea de Interesse"
        list={subareasList}
        tooltip={`Selecione as ??reas profissionais espec??ficas em que voc?? gostaria de atuar/trabalhar. M??ximo ${MAX_SUBAREA} op????es`}
        mode="multiple"
      />
    </Fragment>
  );
}
