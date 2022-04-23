import React from 'react';
import {useState, Fragment} from 'react';
import Image from 'next/image';
import { Col, Row, Space, Card, Avatar, Modal, Button, Breadcrumb, Form, Input, Checkbox } from 'antd';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { ButtonModel } from '../../../components/ButtonModel';
import { ContainerModel } from '../../../components/ContainerModel';
import { SocialMedia } from '../../../components/SocialMedia';

import welcomeImage from '../../../assets/images/characters/rocket-girl.png';
import Styles from './Mentor.module.scss'

const StepWelcome = (props) => {
  const buttonSteps = props.contentSteps

  const [screen, setScreen] = useState(1)

  const [isModalVisible, setIsModalVisible] = useState(false);

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
<Row gutter={[32, 16]} className={Styles.StepWelcome__Section} justify="center">
      <Col span={12} xs={20} sm={20} md={22} lg={12} xl={12}>
        <Heading color="purple">Você chegou!!!</Heading>
        <Space direction="vertical" size={10}>
          <Row>
            <Heading color="quartenary" level={4}>
              Falta pouco para encontrarmos um mentor que combina com você...
            </Heading>
          </Row>
          <Row>
            <Paragraph color="darkGrey">
              Agora você passará pela fase que chamamos de
              <strong> Roda da Trilha</strong>, através de 3 etapas, em que aqui te ajudaremos a
              mapear os seus principais desafios!
            </Paragraph>
          </Row>
          <Col>
          <Row>
            <ButtonModel
              color="quinary"
              border="square"
              block
              height="large"
              width="full"
            >
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
            <Row align="middle" justify="space-around" style={{ marginBottom: '20px'}}>
    
           {buttonSteps.map((item, index) => (
            <ButtonModel 
              className={Styles.StepWelcome__Button} 
              icon={item.icon}
              disabled={item.disabled}
              width="small" 
              color="quinary"
              key={`btn-${index}`}
              onClick={() => props.onClick(index + 1)}
              >
               {item.title}
            </ButtonModel>
          ))}
            </Row>
            </Space>
          </Row>
          </Col>
        </Space>
      </Col>
      <Col span={8} xs={18} sm={14} md={16} lg={8} xl={7} align="middle">
        <Image src={welcomeImage} alt="gif" layout="responsive" />
      </Col>
    </Row>

    </Fragment>
    
  );
};

export default StepWelcome;


