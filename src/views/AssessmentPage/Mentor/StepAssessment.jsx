import React, { Fragment } from 'react';
import { Row, Form, Input, InputNumber, Space } from 'antd';

import { ButtonModel } from '../../../components/ButtonModel';
import { FormRadioGroup } from '../../../components/FormRadioGroup';

import rules from '../../shared/Rules';
import { cpfMask } from '../../shared/utils';

const StepAssessment = (props) => {
  const propsStep = {
    onBack: props.onBack,
    onSuccess: props.onSuccess,
    data: props.data,
    form: props.form,
    content: props.content,
    current: props.current,
    length: props.length,
  };
  const content = [<FirstStep {...propsStep} />, <GeneralSteps {...propsStep} />];

  return (
    <Row align="center">
      <Form
        form={props.form}
        layout="vertical"
        onFinish={props.onSuccess}
        scrollToFirstError
      >
        {props.current === 0 ? content[0] : content[1]}
      </Form>
    </Row>
  );
};
export default StepAssessment;

const FirstStep = (props) => {
  const onCheck = async () => {
    try {
      const values = await props.form.validateFields();
    } catch (errorInfo) {}
  };

  return (
    <Fragment>
      <Form.Item
        label="CPF"
        tooltip="Preencha esse campo com seu número de CPF"
        required
        style={{ width: '500px' }}
      >
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
        style={{ width: '500px' }}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <ButtonModel width="small" color="senary" onClick={onCheck} htmlType="submit">
            Avançar
          </ButtonModel>
        </Form.Item>
      </Row>
    </Fragment>
  );
};

const GeneralSteps = (props) => {
  const onCheck = async () => {
    try {
      const values = await props.form.validateFields();
    } catch (errorInfo) {}
  };
  return (
    <Fragment>
      <FormRadioGroup
        list={props.content.options}
        rules={rules.select}
        name={`radio-group-${props.current}`}
      />
      <Row justify="end">
        <Space size={5}>
          {props.current > 0 && (
            <Form.Item>
              <ButtonModel width="small" color="senary" onClick={props.onBack}>
                Voltar
              </ButtonModel>
            </Form.Item>
          )}
          {props.current < props.length - 1 && (
            <Form.Item>
              <ButtonModel width="small" color="senary" onClick={onCheck} htmlType="submit">
                Avançar
              </ButtonModel>
            </Form.Item>
          )}
          {props.current === props.length - 1 && (
            <Form.Item>
              <ButtonModel width="small" color="senary" onClick={onCheck} htmlType="submit">
                Enviar
              </ButtonModel>
            </Form.Item>
          )}
        </Space>
      </Row>
    </Fragment>
  );
};
