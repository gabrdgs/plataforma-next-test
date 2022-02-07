import React, { Fragment } from 'react';
import Image from 'next/image';
import { Col, Row, Space } from 'antd';
import { Heading } from '../../../../components/Heading';
import { Section } from '../../../../components/Section';
import { Paragraph } from '../../../../components/Paragraph';
import styles from './Development.module.scss';

import gunBoyImage from '../../../../assets/images/characters/gun-boy.svg';
import handsImage from '../../../../assets/images/onboardingPage/shared/hands.svg';

const steps = [
  {
    step: '1º passo',
    text: 'Você preenche seu assessment (você poderá acessá-lo sempre no seu perfil e/ou ao final desta página)',
  },
  {
    step: '2º passo',
    text: 'Preencha suas informações pessoais no perfil, assim os mentores também poderão conhecer um pouco mais sobre você!',
  },
  {
    step: '3º passo',
    text: 'De acordo com suas respostas, utilizamos um algorítmo de matches: uma calculadora que selecionará as 3 melhores opções de mentor que mais combinam com você',
  },
  {
    step: '4º passo',
    text: 'Aí, é só acessar a plataforma e selecionar um deles que o sistema enviará a solicitação para o mentor que você escolheu',
  },
  {
    step: '5º passo',
    text: 'Assim que o mentor aceitar a solicitação você terá acesso ao contato do mentor, agende uma sessão com o mentor com duração de até 2h',
  },
  {
    step: '6º passo',
    text: 'Após a realização da sessão de mentoria, você marcará sua presença acessando a lista pelo seu perfil e já poderá receber um certificado!',
  },
];

export default function Development() {
  return (
    <Fragment>
      <Section
        bgColor="blue"
        wave
        waveDirection="up"
        innerColor="#fff"
        outsideColor="rgba(23, 135, 252, 0.26)"
      >
        <div className={styles.Section8}>
          <Row justify="center">
            <Col xs={22} sm={19}>
              <Heading level={2} alignment="center">
                Funcionamento da Mentoria em 6 Passos:
              </Heading>
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col xs={21} sm={19} md={14} lg={10}>
              <Space direction="vertical" size={20}>
                {steps.map((item, index) => (
                  <Row key={`step-${index}`}>
                    <Heading level={5} strong>
                      {item.step}
                    </Heading>
                    <Paragraph >{item.text}</Paragraph>
                  </Row>
                ))}
              </Space>
            </Col>
            <Col xs={21} sm={16} md={7}>
              <Image src={handsImage} />
            </Col>
          </Row>
        </div>
      </Section>
      <Section bgColor="primary" innerColor="#fff" outsideColor="#11115d" wave waveDirection="up">
        <div className="section-9">
          <Row justify="center" align="top">
            <Col xs={{ span: 21, order: 1 }} sm={16} md={{ span: 8, order: 0 }}>
              <Image src={gunBoyImage} />
            </Col>
            <Col xs={{ span: 21, order: 0 }} sm={19} md={{ span: 12, order: 1 }} xxl={8}>
              <Heading level={2} alignment="center" color="secondary">
                Com seus principais desafios resolvidos na mentoria,
              </Heading>
              <Heading level={2} alignment="center" color="secondary">
                um futuro brilhante estará logo à sua frente!
              </Heading>
            </Col>
          </Row>
        </div>
      </Section>
    </Fragment>
  );
}
