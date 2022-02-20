import React, { Fragment } from 'react';
import Image from 'next/image';
import { Col, Row, Space } from 'antd';
import { Heading } from '../../../../components/Heading';
import { Section } from '../../../../components/Section';
import { Paragraph } from '../../../../components/Paragraph';
import styles from './Development.module.scss';

import handsImage from '../../../../assets/images/onboardingPage/shared/hands.svg';
import seedsImage from '../../../../assets/images/characters/seeds.png';
import { Wave } from '../../../../components/Wave';

const steps = [
  {
    step: '1º passo',
    text: 'Você preenche seu assessment, ou seja, seu diagnóstico (você poderá acessá-lo sempre no seu perfil e/ou ao final desta página)',
  },
  {
    step: '2º passo',
    text: 'Preencha suas informações pessoais no perfil, assim os jovens também poderão conhecer um pouco mais sobre você!',
  },
  {
    step: '3º passo',
    text: 'De acordo com suas respostas, utilizamos um algorítmo de matches: uma calculadora que faz o pareamento dos dados do seu diagnóstico com o de um jovem',
  },
  {
    step: '4º passo',
    text: 'Aí, é só acessar seu perfil, em “solicitações para mentorar” você encontrará novos convites de jovens que cominam com você',
  },
  {
    step: '5º passo',
    text: 'Assim que aceitar a solicitação você terá acesso ao contato do jovem e ele o seu, agende uma sessão com duração de até 2h',
  },
  {
    step: '6º passo',
    text: 'Após a realização da sessão de mentoria, você marcará sua presença acessando a “lista de presença” pelo seu perfil e já poderá receber seu SElo de mentor Semear!',
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
              <Space direction="vertical" size={30}>
                {steps.map((item, index) => (
                  <Row key={`step-${index}`}>
                    <Heading level={5}>{item.step}</Heading>
                    <Paragraph>{item.text}</Paragraph>
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
            <Col xs={22} sm={19}>
              <Heading level={2} alignment="center" color="secondary">
                Juntos com você,
              </Heading>
              <Heading level={2} alignment="center" color="secondary">
                Geramos mudança na vida de jovens universitários!
              </Heading>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={20} md={16}>
              <Image src={seedsImage} />
            </Col>
          </Row>
        </div>
      </Section>
      <Wave innerColor = '#c3e0fe' outsideColor = '#11115d'/>
    </Fragment>
  );
}
