import React, { Fragment } from 'react';
import Image from 'next/image';
import { Col, Row, Space } from 'antd';
import { Heading } from '../../../../components/Heading';
import { Section } from '../../../../components/Section';
import { Video } from '../../../../components/Video';
import { CardModel } from '../../../../components/CardModel';
import { Paragraph } from '../../../../components/Paragraph';

import maslowPyramidImage from '../../../../assets/images/onboardingPage/shared/maslow-pyramid.svg';
import bigHandImage from '../../../../assets/images/onboardingPage/mentor/big-hand.svg';
import ellipseImage from '../../../../assets/images/onboardingPage/mentor/ellipse.svg';

export default function Methodology() {
  const listText = [
    'fazendo-o refletir sobre a importância de cada área;',
    'propondo soluções;',
    'estabelecendo metas e o ajudando a estruturar planos de ação;',
  ];

  return (
    <Fragment>
      <Section bgColor="primary" marginBottom='default'>
        <Space direction="vertical" size={100}>
          <div className="section-4">
            <Space direction="vertical" size={50}>
              <Row justify="center">
                <Col xs={21} sm={17} md={13} lg={10} xxl={16}>
                  <Heading color="secondary" alignment="center">
                    ATUANDO POR UM BRASIL MELHOR E MAIS JUSTO!
                  </Heading>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={21} sm={19}>
                  <Paragraph size="large" color="secondary" alignment='center'>
                    Trabalhamos apoiando e desenvolvendo jovens de baixa-renda que acabam de
                    ingressar nas maiores universidades do país para garantir que esse jovem não
                    evada e comece uma jornada de sucesso, livrando sua família do ciclo de pobreza.
                  </Paragraph>
                </Col>
              </Row>
            </Space>
          </div>
          <div className="section-5">
            <Row justify="center">
              <Col xs={21} sm={19}>
                <Heading level={2} color="secondary">
                  Assista e entenda a causa:
                </Heading>
              </Col>
            </Row>
            <Row justify="center">
              <Video
                youtubeID="uJUhDhMRNqw"
                title="Direitos e Deveres do Mentor"
                bgColor="primary"
                bgImage="primary"
                width="middle"
              />
            </Row>
          </div>
          <div className="section-6">
            <Row justify="center">
              <Col xs={21} sm={19}>
                <Heading level={2} color="secondary">
                  E o que é ser mentor no Semear?
                </Heading>
              </Col>
            </Row>
            <Row justify="center" > 
              <Video
                youtubeID="Or5Im4742A0"
                title="Direitos e Deveres do Mentor"
                bgColor="primary"
                width="middle"
              />
            </Row>
          </div>
        </Space>
      </Section>
      <Section bgColor="blue">
        <Space direction="vertical" size={100}>
          <div className="section-7">
            <Space direction="vertical" size={50}>
            <Row justify="center">
              <Col xs={21}>
                <Heading level={3} alignment="center">
                  Esta é Pirâmide de Maslow,
                </Heading>
                <Heading level={3} alignment="center">
                  a hierarquização das necessidades humanas:
                </Heading>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={12}>
                <Image src={maslowPyramidImage} />
              </Col>
            </Row>
            <Row justify="center">
              <Col span={10}>
                <Paragraph alignment="center">
                  O jovem classifica as diversas áreas de sua vida com notas indo de 0 a 10,
                  baseadas em parâmetros estabelecidos pelo Semear.
                </Paragraph>
              </Col>
            </Row>
            <Row justify="center">
              <CardModel color="tertiary" height="small" width="super" alignment="center">
                <Heading level={4} alignment="center" color="secondary">
                  Isto é feito para podermos entender quais áreas da vida deste jovem estão sendo um
                  freio ou uma alavanca em sua jornada de desenvolvimento. Estabelecemos que a nota
                  7 é um nível neutro, ou seja, esta área não é um freio e nem uma alavanca na vida
                  do jovem.
                </Heading>
              </CardModel>
            </Row>
            </Space>
          </div>
          <div className="section-8">
            <Row>
              <Col xs={21} sm={17} md={13} lg={10} xxl={16} offset={2}>
                <Heading>SEU PAPEL COMO MENTOR:</Heading>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <Col span={8}>
                <Image src={bigHandImage} />
              </Col>
              <Col span={10}>
                <Space direction="vertical" size={10}>
                  <Paragraph size="large">
                    Trabalhar os pontos de melhoria de cada desafio encontrado pelo seu mentorado:
                  </Paragraph>
                  {listText.map((item, index) => (
                    <Row gutter={8} align="middle" key={`point-${index}`}>
                      <Col span={2}>
                        <Image src={ellipseImage} width={'30%'} />
                      </Col>
                      <Col span={18}>
                        <Heading level={4}>{item}</Heading>
                      </Col>
                    </Row>
                  ))}
                  <Paragraph size="large">
                    para que estas notas aumentem e cheguem, pelo menos, ao nível neutro.
                  </Paragraph>
                </Space>
              </Col>
            </Row>
          </div>
        </Space>
      </Section>
    </Fragment>
  );
}
