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
    content: <StepAssessment content={item} />
  }));

  return (
    <Fragment>
      <Row align="middle" justify="center">
        <Col xs={{ span: 1 }} sm={{ span: 6 }} md={{ span: 6 }} xl={{ span: 4 }}>
          <Steps current={current} size="small" direction="vertical">
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
        <Col offset={1} xs={{ span: 20 }} sm={{ span: 16 }}>
          <div className="steps-content">{steps[current].content}</div>
        </Col>
      </Row>
      <div className="steps-buttons">
        <Row justify="end" align="middle">
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
                  message.success('Etapa 1 concluída com sucesso!');
                  props.onClick(0);
                }}
              >
                Enviar
              </Button>
            )}
          </Space>
        </Row>
      </div>
    </Fragment>
  );
};
export default WheelComponent;
