import React, { Fragment, useState } from 'react';
import { Col, Input, Radio, Space, Steps, Form } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

const { TextArea } = Input;
const { Step } = Steps;

const NegativeStep = (props) => {
  const steps = [{ content: <StepOne userType={props.userType}/> }, { content: <StepTwo /> }];
  return (
    <Fragment>
      {props.current <= steps.length && (
        <div>
          <Steps current={props.current - 1} justify="center" align="middle">
            {steps.map((item, index) => (
              <Step key={`step-${index}`} />
            ))}
          </Steps>
          <div className="steps-content">{steps[props.current - 1].content}</div>
        </div>
      )}
    </Fragment>
  );
};
export default NegativeStep;

const StepOne = (props) => {
  const [value, setValue] = useState(0);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Fragment>
      <Col span={20} offset={2}>
        <Form layout="vertical">
          <Heading level={3}>
            Sentimos muito <FrownOutlined />
          </Heading>
          <Form.Item label="Porque a mentoria não aconteceu?">
            <Radio.Group value={value} onChange={onChange} label="Porque a mentoria não aconteceu?">
              <Space direction="vertical" size={5}>
                {props.userType === 'mentor' ? (
                  <div>
                    <Radio value={1}>
                      Não pude realizar a mentoria devido a falta de disponibilidade
                    </Radio>
                    <Radio value={2}>Tive problemas para me comunicar com o mentorado(a)</Radio>
                    <Radio value={3}>Marquei o encontro e o(a) mentorado(a) não apareceu</Radio>
                    <Radio value={4}>Entrei em contato e o(a) mentorado(a) não respondeu</Radio>
                    <Radio value={5}>
                      Outro
                      {value === 5 ? <Input style={{ width: 300, marginLeft: 10 }} /> : null}
                    </Radio>
                  </div>
                ) : (
                  <div>
                    <Radio value={1}>
                      Não pude realizar a mentoria devido a falta de disponibilidade
                    </Radio>
                    <Radio value={2}>Tive problemas para me comunicar com o(a) mentor(a)</Radio>
                    <Radio value={3}>Marquei o encontro e o(a) mentor(a) não apareceu</Radio>
                    <Radio value={4}>Entrei em contato e o(a) mentor(a) não respondeu</Radio>
                    <Radio value={5}>
                      Outro
                      {value === 5 ? <Input style={{ width: 300, marginLeft: 10 }} /> : null}
                    </Radio>
                  </div>
                )}
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Deseja contar um pouco mais sobre a sua experiência">
            <TextArea rows={4} label="Deseja contar um pouco mais sobre a sua experiência?" />
          </Form.Item>
        </Form>
      </Col>
    </Fragment>
  );
};

function StepTwo() {
  return (
    <Fragment>
      <Col span={20} offset={2}>
        <Heading level={3}> Feedback </Heading>
        <Paragraph> Até a Próxima! </Paragraph>
      </Col>
    </Fragment>
  );
}
