import React, { Fragment, useState } from 'react';
import { Button, Col, Row, Space } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { MenuModel } from '../../../components/MenuModel';
import { LockFilled, UnlockFilled, CheckSquareFilled } from '@ant-design/icons';

import FirstWheel from './FirstWheel';
import StepWelcome from './StepWelcome';

export default function Seed() {
  const menuItems = [
    {
      key: 'begin',
      title: 'Bem vindo!',
      icon: <RocketOutlined />,
    },
  ];
  const [contentIndex, setContentIndex] = useState(0);
  const onClickButton = (index) => {
    setContentIndex(index);
  };
  const wheelContent = [
    {
      title: 'Etapa 1',
      disabled: false,
      icon: <UnlockFilled />,
      content: <FirstWheel />,
    },
    {
      title: 'Etapa 2',
      disabled: true,
      icon: <LockFilled />,
      content: <FirstWheel />,
    },
    {
      title: 'Etapa 3',
      disabled: true,
      icon: <LockFilled />,
      content: <FirstWheel />,
    },
  ];

  const content = [
    <StepWelcome contentSteps={wheelContent} onClick={onClickButton} />,
    <FirstWheel onClick={onClickButton} />,
    <FirstWheel onClick={onClickButton} />,
    <FirstWheel onClick={onClickButton} />,
  ];

  return (
    <Fragment>
      <MenuModel menuItems={menuItems} userType="seed" />
      <Row gutter={[32, 16]} align="middle" justify="center">
        <Col>{content[contentIndex]}</Col>
      </Row>
    </Fragment>
  );
}
