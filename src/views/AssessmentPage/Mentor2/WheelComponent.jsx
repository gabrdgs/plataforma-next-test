import React, { Fragment, useState } from 'react';
import { Steps, Button, message, Col, Row, Space, Form } from 'antd';

import StepAssessment from './StepAssessment';
import { ButtonModel } from '../../../components/ButtonModel';
import { ContainerModel } from '../../../components/ContainerModel';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

import layout from '../../shared/Layout';

import Styles from './Mentor.module.scss';

const { Step } = Steps;

const WheelComponent = (props) => {
  const [current, setCurrent] = useState(0);

  const [form] = Form.useForm();

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = props.contentAssessment.map((item) => ({
    title: item.title,
    content: <StepAssessment form={form} content={item} />,
  }));

  return (
    <Fragment>
      <Row justify='space-between'>
        <Col {...layout.columns.twoColumnTxt} style={{ width: '100%' }}>
          {steps[current].content}
          <Row justify="end" align="middle">
              <div className="steps-buttons">
                <Space size={5}>
                  {current > 0 && (
                    <ButtonModel
                      className={Styles.WheelComponent__Button}
                      width="small"
                      color="senary"
                      onClick={() => prev()}
                    >
                      Anterior
                    </ButtonModel>
                  )}
                  {current < props.contentAssessment.length - 1 && (
                    <ButtonModel
                      className={Styles.WheelComponent__Button}
                      width="small"
                      color="senary"
                      onClick={() => next()}
                    >
                      Próximo
                    </ButtonModel>
                  )}
                  {current === props.contentAssessment.length - 1 && (
                    <ButtonModel
                      width="small"
                      color="senary"
                      className={Styles.WheelComponent__Button}
                      onClick={() => {
                        message.success(`Etapa ${props.step} concluída com sucesso!`);
                        props.onClick(0, props.step);
                      }}
                      href={props.step === 3 && '/matching-seed'}
                    >
                      Enviar
                    </ButtonModel>
                  )}
                </Space>
              </div>
            </Row>
        </Col>
        <Col {...layout.columns.twoColumnSteps}>
          <ContainerModel color="primaryDark" className={Styles.WheelComponent__StepsList}>
            <Heading level={4} color="secondary" alignment='center'>
              Teste de Canal
            </Heading>
            <Steps current={current} size="small" direction="vertical">
              {steps.map((item) => (
                <Step
                  className={Styles.WheelComponent__StepTitle}
                  key={item.title}
                  title={
                    <Paragraph level={5} color="secondary">
                      {item.title}
                    </Paragraph>
                  }
                />
              ))}
            </Steps>
          </ContainerModel>
        </Col>
      </Row>
    </Fragment>
  );
};
export default WheelComponent;
