import React, { Fragment, useState } from 'react';
import { Steps, Button, message, Col, Row, Space } from 'antd';

import StepAssessment from './StepAssessment';

const { Step } = Steps;

const WheelComponent = (props) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = props.contentAssessment.map((item) => ({
    title: item.title,
    content: <StepAssessment content={item} />,
  }));

  return (
    <Fragment>
      <Space direction="vertical" size={30} style={{ width: '100%' }}>
        <Row align="middle" justify="center">
          <Space size={250} style={{ width: '100%' }}>
            <Col xs={1} lg={24}>
              <Steps current={current} size="small" direction="vertical">
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
            </Col>
            <Col sm={25} md={24}>
              {steps[current].content}
            </Col>
          </Space>
        </Row>
        <Row justify="end" align="middle">
          <div className="steps-buttons">
            <Space size={5}>
              {current > 0 && <Button onClick={() => prev()}>Anterior</Button>}
              {current < props.contentAssessment.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Próximo
                </Button>
              )}
              {current === props.contentAssessment.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => {
                    message.success(`Etapa ${props.step} concluída com sucesso!`);
                    props.onClick(0, props.step);
                  }}
                  href={props.step === 3 && '/matching-seed'}
                >
                  Enviar
                </Button>
              )}
            </Space>
          </div>
        </Row>
      </Space>
    </Fragment>
  );
};
export default WheelComponent;
