import React, { Fragment } from 'react';
import Image from 'next/image';
import { Col, Row, Space } from 'antd';
import { Heading } from '../../../../components/Heading';
import { Section } from '../../../../components/Section';
import { Video } from '../../../../components/Video';
import { CardModel } from '../../../../components/CardModel';
import { Paragraph } from '../../../../components/Paragraph';

import learningTheoryImage from '../../../../assets/images/onboardingPage/seed/learning-theory.svg';
import methodologySemearImage from '../../../../assets/images/onboardingPage/seed/methodology-semear.svg';
import skateBoyImage from '../../../../assets/images/characters/skate-boy.svg';
import hatGirlImage from '../../../../assets/images/characters/hat-girl.svg';
import maslowPyramidImage from '../../../../assets/images/onboardingPage/shared/maslow-pyramid.svg';
import waveImage from '../../../../assets/images/onboardingPage/shared/wave-color.svg';

export default function Methodology() {
  return (
    <Fragment>
      <Section bgColor="blue">
        <Space direction="vertical" size={100}>
          <div className="section-3">
            <Space direction="vertical" size={50}>
              <Row>
                <Col offset={1}>
                  <Heading>JUNTOS GERAMOS MUDANÇAS!</Heading>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={21} sm={19}>
                  <Paragraph size="large">
                    A metodologia que usamos foca em elevar o volume de conhecimento diversificando
                    as formas de aprender. Somando os 3 níveis de aprendizado, indicados na imagem
                    abaixo, multiplicamos conhecimento de forma rápida e eficiênte, segue:
                  </Paragraph>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={22} sm={19} lg={16}>
                  <Image src={learningTheoryImage} />
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={21} sm={19}>
                  <Paragraph size="large">
                    Esta metodologia é conhecida como “70/20/10”, o nome referencia o tempo a ser
                    dedicado para cada um dos níveis de aprendizado. Assim, potencializando
                    aprendizados novos. O Gráfico a seguir mostra um resumo, entenda:
                  </Paragraph>
                </Col>
              </Row>
            </Space>
          </div>
          <div className="section-4">
            <Row>
              <Col offset={1}>
                <Heading>METODOLOGIA 70|20|10:</Heading>
              </Col>
            </Row>
            <Row justify="center">
              <Col xs={22} sm={20} lg={16}>
                <Image src={methodologySemearImage} />
              </Col>
            </Row>
          </div>
          <div className="section-5">
            <Row justify="center" align="middle">
              <Col span={5}>
                <Image src={skateBoyImage} />
              </Col>
              <Col span={10}>
                <CardModel height="small" color="primary" hoverable>
                  <Space direction="vertical" size={20}>
                    <Row justify="center">
                      <Col span={20}>
                        <Paragraph alignment="center">
                          Com o Programa de Mentoria social do Semear você se desenvolve junto a um
                          profissional experiente! 
                        </Paragraph>
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Paragraph alignment="center">
                        Com o ISemear, mentorar ficou muito mais fácil!
                      </Paragraph>
                    </Row>
                  </Space>
                </CardModel>
              </Col>
              <Col span={5}>
                <Image src={hatGirlImage} />
              </Col>
            </Row>
          </div>
        </Space>
        <Row justify="center" style={{ marginBottom: '-200px' }}>
          <Image src={waveImage} />
        </Row>
      </Section>
      <Section bgColor="primary" innerColor="#fff" outsideColor="#11115d" wave waveDirection="up">
        <div className="section-6">
          <Row justify="center">
            <Col xs={21} sm={19} lg={16} xl={14}>
              <Heading level={4} color="secondary" alignment="center">
                Queremos criar experiências de aprendizado que te prepare os para as experiências
                reais
              </Heading>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={19} lg={16} xl={14}>
              <Heading color="secondary" alignment="center">
                Entenda como miramos no seu futuro:
              </Heading>
            </Col>
          </Row>
          <Row justify="center">
            <Video youtubeID="zqxlDS0IlyE" title="Direitos e Deveres do Jovem" bgColor="primary" width='middle' bgImage="primary" />
          </Row>
        </div>
      </Section>
      <Section bgColor="blue" wave waveDirection="up" outsideColor="rgba(23, 135, 252, 0.26)">
        <div className="section-7">
          <Row justify="center">
            <Col xs={21}>
              <Heading level={3} alignment="center">
                Esta é Pirâmide de Maslow, a hierarquia das necessidades humanas:
              </Heading>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <Image src={maslowPyramidImage} />
            </Col>
          </Row>
        </div>
      </Section>
    </Fragment>
  );
}
