import React, { Fragment } from 'react';
import { Row, Form, Input, InputNumber, Space } from 'antd';

import { FormButton } from '../../../components/FormButton';
import { FormRadioGroup } from '../../../components/FormRadioGroup';

import rules from '../../shared/Rules';
import { cpfMask } from '../../shared/utils';
import { ButtonModel } from '../../../components/ButtonModel';

const StepAssessment = (props) => {
  const propsStep = {
    content: props.content,
    current: props.current,
  };
  const content = [<FirstStep />, <GeneralSteps {...propsStep} />];

  const onCheck = async () => {
    try {
      const values = await props.form.validateFields();
    } catch (errorInfo) {}
  };

  return (
    <Row align="center">
      <Form form={props.form} layout="vertical" onFinish={props.onSuccess} scrollToFirstError>
        {props.current === 0 ? content[0] : content[1]}
        <FormButton
          current={props.current}
          length={props.length}
          color="secondary"
          onCheck={onCheck}
          onBack={props.onBack}
        />
      </Form>
    </Row>
  );
};
export default StepAssessment;

const FirstStep = () => {
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
    </Fragment>
  );
};

const GeneralSteps = (props) => {
  return (
    <Fragment>
      <FormRadioGroup
        list={props.content.options}
        rules={rules.select}
        name={`radio-group-${props.current}`}
      />
    </Fragment>
  );
};
