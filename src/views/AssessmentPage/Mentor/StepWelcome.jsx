import React from 'react';
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Col, Row, Space, Card, Avatar } from 'antd';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { ButtonModel } from '../../../components/ButtonModel';

import Layout from '../../shared/Layout';

import welcomeImage from '../../../assets/images/characters/rocket-girl.png';
import Styles from './Mentor.module.scss';

const StepWelcome = (props) => {
  const buttonSteps = props.contentSteps;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <Row
        className={Styles.StepWelcome__Section}
        justify="center"
        align="middle"
      >
        <Col {...Layout.columns.twoColumnTxt}>
          <Heading color="purple">Você chegou!!!</Heading>
          <Space direction="vertical" size={10} style={{ width: '100%' }}>
            <Row>
              <Heading color="quartenary" level={4}>
                Falta pouco para encontrarmos um jovem que combina com você...
              </Heading>
            </Row>
            <Row>
              <Paragraph color="darkGrey">
                Agora você vai passar pelo <strong>Diagnóstico</strong>, uma fase a qual utilizamos
                para te conhecer melhor e proporcionarmos o melhor match possível com um jovem!
              </Paragraph>
            </Row>
            <Row justify="start">
              <ButtonModel color="primary" border="square" block height="large" width="full">
                Etapa 1
              </ButtonModel>
              <Card className={Styles.StepWelcome__Card}>
                <Row>
                  <Space direction="horizontal">
                    <Avatar className={Styles.StepWelcome__Avatar}>1</Avatar>
                    <Heading level={4}>Características e Habilidades</Heading>
                  </Space>
                </Row>

                <Row>
                  <Space direction="horizontal">
                    <Avatar className={Styles.StepWelcome__Avatar}>2</Avatar>
                    <Heading level={4}> Deveres do Mentor </Heading>
                  </Space>
                </Row>

                <Row>
                  <Space direction="horizontal">
                    <Avatar className={Styles.StepWelcome__Avatar}>3</Avatar>
                    <Heading level={4}>Direitos do Mentor</Heading>
                  </Space>
                </Row>

                <Row>
                  <Space direction="horizontal">
                    <Avatar className={Styles.StepWelcome__Avatar}>4</Avatar>
                    <Heading level={4}>Metodologia da Mentoria</Heading>
                  </Space>
                </Row>
              </Card>
            </Row>
            <Row align="end">
              <Space size={10}>
                <Row align="middle" justify="space-around" style={{ marginBottom: '20px' }}>
                  {buttonSteps.map((item, index) => (
                    <ButtonModel
                      className={Styles.StepWelcome__Button}
                      icon={item.icon}
                      disabled={item.disabled}
                      width="small"
                      color="primary"
                      key={`btn-${index}`}
                      onClick={() => props.onClick(index + 1)}
                    >
                      {item.title}
                    </ButtonModel>
                  ))}
                </Row>
              </Space>
            </Row>
          </Space>
        </Col>
        <Col {...Layout.columns.twoColumnImg}>
          <Image src={welcomeImage} alt="menina andando em um foguete" layout="responsive" />
        </Col>
      </Row>
    </Fragment>
  );
};

export default StepWelcome;
