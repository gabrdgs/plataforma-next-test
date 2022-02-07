import React, { Fragment } from 'react';
import Image from 'next/image';
import { Col, Row } from 'antd';
import { Heading } from '../../../../components/Heading';
import { Wave } from '../../../../components/Wave';
import { Section } from '../../../../components/Section';
import { Video } from '../../../../components/Video';
import { Paragraph } from '../../../../components/Paragraph';

import waveImage from '../../../../assets/images/onboardingPage/shared/wave-color.svg';
import seedsImage from '../../../../assets/images/characters/seeds.png';

export default function Intro() {
  return (
    <Fragment>
      <Section bgColor="blue">
        <div className="section-1">
          <Row>
            <Col offset={1}>
              <Heading level={3}>OS DESAFIOS</Heading>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={21} sm={17} md={13} lg={10} xxl={16}>
              <Heading level={1} alignment="center">
                SABIA QUE O SEU FUTURO É BRILHANTE?
              </Heading>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={21} sm={17}>
              <Paragraph size='large'>
                Esta página é um guia que explica o funcionamento do programa de mentoria. Ele te
                ajudará a aproveitar as melhores experiências que o Instituto Semear pode
                oferecerer!
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={20} md={17}>
              <Image src={seedsImage} />
            </Col>
          </Row>
          <Row justify="center" style={{ marginBottom: '-150px' }}>
            <Image src={waveImage} />
          </Row>
        </div>
      </Section>
      <Section bgColor="primary">
        <div className="section-2">
          <Row>
            <Col offset={1}>
              <Heading color="secondary">Entenda o que fazemos:</Heading>
            </Col>
            <Video youtubeID="uJUhDhMRNqw" title="Apresentação Institucional" bgColor="primary" />
          </Row>
        </div>
      </Section>
      <Wave direction="up" outsideColor="rgba(23, 135, 252, 0.26)" />
    </Fragment>
  );
}
