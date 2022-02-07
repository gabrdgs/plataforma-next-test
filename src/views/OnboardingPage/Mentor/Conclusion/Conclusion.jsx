import React, { Fragment } from 'react';
import Image from 'next/image';
import { Col, Row, Space } from 'antd';
import { Heading } from '../../../../components/Heading';
import { Section } from '../../../../components/Section';
import { CardModel } from '../../../../components/CardModel';
import { ButtonModel } from '../../../../components/ButtonModel';
import { Paragraph } from '../../../../components/Paragraph';

import rocketImage from '../../../../assets/images/onboardingPage/shared/rocket.svg';

export default function Conclusion() {
  return (
    <Fragment>
      <Section bgColor="blue">
        <div className="section-10">
          <Space direction="vertical" size={100}>
            <Row justify="center">
              <CardModel
                width="large"
                height="half"
                color="quartenary"
                hoverable={true}
                bordered={false}
              >
                <Space direction="vertical" size={30}>
                  <Heading>Pronto!</Heading>
                  <Heading level={4} alignment="center">
                    Agora você já pode dar inicio ao processo da mentoria: preencha seu diagnóstico
                    clicando no botão a seguir:
                  </Heading>
                  <Row justify="center" align="middle">
                    <ButtonModel width="large" height="large" href="/">
                      QUERO COMEÇAR!
                    </ButtonModel>
                  </Row>
                  <Paragraph alignment="center">
                    Não se esqueça de completar suas informações lá no seu perfil! Ao final do
                    assessment você já pode entrar no seu perfil, ele também sempre estará presente
                    no menu, ou ainda, você pode acessá-lo agora por aqui.
                  </Paragraph>
                </Space>
              </CardModel>
            </Row>
            <Row justify="center">
              <Col span={6}>
                <Image src={rocketImage} />
              </Col>
            </Row>
          </Space>
        </div>
      </Section>
    </Fragment>
  );
}
