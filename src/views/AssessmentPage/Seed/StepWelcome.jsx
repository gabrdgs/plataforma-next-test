import React from 'react';
import Image from 'next/image';
import { Col, Row, Space, Button } from 'antd';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

import welcomeImage from '../../../assets/images/characters/rocket-girl.png';

const StepWelcome = (props) => {
  const buttonSteps = props.contentSteps;

  return (
    <Row gutter={[32, 16]} justify="center">
      <Col span={12} xs={20} sm={20} md={22} lg={12} xl={12}>
        <Heading>Você chegou!!!</Heading>
        <Space direction="vertical" size={10}>
          <Row>
            <Paragraph>Falta pouco para encontrarmos um mentor que combina com você...</Paragraph>
          </Row>
          <Row>
            <Paragraph>
              Agora você passará pela fase que chamamos de
              <strong> Roda da Trilha</strong>, através de 3 etapas, em que aqui te ajudaremos a
              mapear os seus principais desafios!
            </Paragraph>
          </Row>
          <Row>
            <Paragraph>
              Depois, nossa <strong>Calculadora de Matches</strong> encontrará o mentor mais
              qualificado para trabalhar em soluções junto com você.
            </Paragraph>
          </Row>
          {buttonSteps.map((item, index) => (
            <Button
              icon={item.icon}
              disabled={item.disabled}
              block
              key={`btn-${index}`}
              onClick={() => props.onClick(index + 1)}
            >
              {item.title}
            </Button>
          ))}
        </Space>
      </Col>
      <Col span={8} xs={18} sm={14} md={16} lg={8} xl={7}>
        <Image src={welcomeImage} alt="gif" layout="responsive" />
      </Col>
    </Row>
  );
};

export default StepWelcome;
