import React, { Fragment, useState } from 'react';
import { Steps, Button, message, Col, Row, Space } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { MenuModel } from '../../../components/MenuModel';

import StepWelcome from './StepWelcome';
import StepChannel from './StepChannel';
import StepProfile from './StepProfile';

import styles from './Mentor.module.scss';

const { Step } = Steps;

export default function Mentor() {
  const [current, setCurrent] = useState(0);
  const [stepInfoCompleted, setStepInfoCompleted] = useState(false);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onChangeStepInfo = (value) => {
    setStepInfoCompleted(value);
  };

  const disableNext = () => {
    if (stepInfoCompleted || current === 0) return false;
    else return true;
  };

  const steps = [
    {
      title: 'Bem vindo',
      content: <StepWelcome />,
    },
    {
      title: 'Teste de Canal',
      content: <StepChannel />,
    },
    {
      title: 'Perfil',
      content: <StepProfile />,
    },
  ];

    const menuItems = [
      {
        key: 'begin',
        title: 'Bem vindo!',
        icon: <RocketOutlined />,
      },
    ];

  return (
    <Fragment>
      <MenuModel menuItems={menuItems} userType="mentor" />
      <Row align="middle" justify="center">
        <Steps current={current} size="small" direction="horizontal" style={{ width: '60%' }}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Col offset={1} xs={{ span: 20, offset: 2 }} sm={{ span: 16, offset: 1 }}>
          <div className="steps-content">{steps[current].content}</div>
        </Col>
      </Row>
      <Row align="middle" justify="end">
        <Space size={5}>
          {current > 0 && <Button onClick={() => prev()}>Anterior</Button>}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Próximo
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processo Completo')} href='/matching-mentor'>
              Enviar
            </Button>
          )}
        </Space>
      </Row>
    </Fragment>
  );
}
