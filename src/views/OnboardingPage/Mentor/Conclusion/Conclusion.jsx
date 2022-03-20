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
            <Row justify="center">
              <CardModel
                width="super"
                height="half"
                color="quartenary"
                hoverable={true}
                bordered={false}
              >
                <Space direction="vertical" size={30}>
                  <Row>
                    <Col offset={1} span={6}>
                      <Image src={rocketImage} />
                    </Col>
                    <Col span={16} align="middle">
                      <Space direction="vertical" size={15}>
                        <Heading alignment="center">Pronto!</Heading>
                        <Paragraph size="large" alignment="center" strong>
                          Agora você já pode dar inicio ao processo da mentoria: preencha seu
                          diagnóstico clicando no botão a seguir:
                        </Paragraph>
                        <ButtonModel width="large" height="large" href="/assessment-mentor">
                          QUERO COMEÇAR!
                        </ButtonModel>
                      </Space>
                    </Col>
                  </Row>
                  <Paragraph alignment="center">
                    Não se esqueça de completar suas informações lá no seu perfil! Ao final do
                    assessment você já pode entrar no seu perfil, ele também sempre estará presente
                    no menu, ou ainda, você pode acessá-lo agora por aqui.
                  </Paragraph>
                </Space>
              </CardModel>
            </Row>
        </div>
      </Section>
    </Fragment>
  );
}
