import React, { Fragment, useState, useCallback } from 'react';
import { Steps, message, Col, Row, Space, Form } from 'antd';

import StepAssessment from './StepAssessment';
import { ButtonModel } from '../../../components/ButtonModel';
import { ContainerModel } from '../../../components/ContainerModel';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

import layout from '../../shared/Layout';

import Styles from './Mentor.module.scss';

const { Step } = Steps;

const WheelComponent = (props) => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});

  const content = props.contentAssessment;

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
    message.success('Sucesso! Diagnóstico concluído');
    const valuesForm = form.getFieldsValue(true);
    window.location.href = `/thanks-page`;
  }, []);

  const steps = content.map((item) => ({
    title: item.title,
  }));

  return (
    <Fragment>
      <Row justify="space-around" gutter={48}>
        <Col {...layout.columns.twoColumnStepsTxt} style={{ paddingTop: '50px' }}>
          <Row justify="center">
            <Col span={21}>
              <Heading alignment="center" color="purple">
                {content[current].title}
              </Heading>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={21}>
              <Paragraph size="large" alignment="center">
                {content[current].subtitle}
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center" >
            <Col span={21}>
              <StepAssessment
                form={form}
                content={content[current]}
                length={content.length}
                current={current}
                onSuccess={current == content.length - 1 ? handleSubmit : next}
                onBack={prev}
                data={data}
              />
            </Col>
          </Row>
        </Col>
        <Col {...layout.columns.twoColumnSteps}>
          <ContainerModel color="primaryDark" className={Styles.WheelComponent__StepsList}>
            <Heading level={4} color="secondary" alignment="center">
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
