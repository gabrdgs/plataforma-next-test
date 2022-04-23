import React from 'react';
import Image from 'next/image';
import { Col, Row, Space, Breadcrumb } from 'antd';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

import welcomeImage from '../../../assets/images/characters/mentors.png';

const StepWelcome = ({}) => {

  return (
    <Row gutter={[32, 16]} align="middle" justify="space-around">
      <Col span={12} offset={2} xs={20} sm={20} md={12} lg={12} xl={12}>
        <Heading>Você chegou!</Heading>
        <Space direction='vertical' size={20}>
          <Row>
            <Paragraph>Falta pouco para encontrarmos jovens que combinam com você...</Paragraph>
          </Row>
          <Row>
            <Paragraph>
              Agora você passará pela fase que chamamos de
              <strong> Roda da Trilha</strong>, em que aqui te ajudaremos a mapear os seus
              principais desafios!
            </Paragraph>
          </Row>
          <Row>
          </Row>
        </Space>
      </Col>
      <Col span={8} xs={18} sm={14} md={8} lg={8} xl={7}>
        <Image src={welcomeImage} alt="gif" layout="responsive" />
      </Col>
    </Row>
  );
};

export default StepWelcome;
