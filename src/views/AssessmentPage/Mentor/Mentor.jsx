import React, { Fragment, useState } from 'react';
import { Steps, Button, message, Col, Row, Space } from 'antd';
import 'antd/dist/antd.css';
import { MenuModel } from '../../../components/MenuModel';
import StepWelcome from './StepWelcome';
import StepChannel from './StepChannel';
import StepProfile from './StepProfile';
import StepInfos from './StepInfos';

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
      title: 'Infos Complementares',
      content: <StepInfos onChange={onChangeStepInfo} />,
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
        key: 'all',
        title: 'Todos os convites',

      },
      {
        key: 'accepted',
        title: 'Meus matches',
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
            <Button type="primary" onClick={() => message.success('Processo Completo')}>
              Enviar
            </Button>
          )}
        </Space>
      </Row>
    </Fragment>
  );
}
