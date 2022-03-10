import React, { Fragment } from 'react';
import Image from 'next/image';
import { Col, Row, Space } from 'antd';
import { Heading } from '../../../../components/Heading';
import { Wave } from '../../../../components/Wave';
import { Section } from '../../../../components/Section';
import { CardModel } from '../../../../components/CardModel';
import { Paragraph } from '../../../../components/Paragraph';

import waveImage from '../../../../assets/images/onboardingPage/shared/wave-color.svg';
import robotImage from '../../../../assets/images/onboardingPage/mentor/robot.svg';
import skateBoyImage from '../../../../assets/images/characters/skate-boy.svg';
import hatGirlImage from '../../../../assets/images/characters/hat-girl.svg';

const name = 'YODANA DA SILVA';
const mentorName = name.toUpperCase();

export default function Intro() {
  return (
    <Fragment>
      <Section bgColor="blue">
        <Space direction="vertical" size={100}>
          <div className="section-1">
            <Row justify="center" xs={21} sm={19}>
              <CardModel
                width="super"
                height="half"
                color="tertiary"
                hoverable={true}
                bordered={false}
                alignment="center"
              >
                <Row align="middle" gutter={48}>
                  <Col span={6}>
                    <Image src={robotImage} />
                  </Col>
                  <Col span={12}>
                    <Heading color="secondary">{`MUITO OBRIGADO,`}</Heading>
                    <Heading color="secondary">{`${mentorName}!`}</Heading>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col xs={22} sm={20} md={18}>
                    <Heading alignment="center" color="secondary">
                      seu papel é fundamental na vida de jovens universitários
                    </Heading>
                  </Col>
                </Row>
              </CardModel>
            </Row>
          </div>
          <div className="section-2">
            <Space direction="vertical" size={20}>
              <Row justify="center">
                <Col xs={15}>
                  <Heading level={2}>POR QUE PRECISAMOS DE VOCÊ?</Heading>
                </Col>
              </Row>
              <Row justify="center" align="middle">
                <Col span={15}>
                  <Paragraph size="large">
                    A falta de referências que insiprem e motivem jovens de baixa renda a ocupar a
                    universidade pode tornar-se um motivo significativo para que eles acabem
                    desistindo de seus cursos e sonhos!
                  </Paragraph>
                </Col>
              </Row>
              <Row justify="center" align="middle">
                <Col span={15}>
                  <Paragraph size="large">
                    E com a sua ajuda, evitamos que estes jovens talentosos sejam desperdiçados, e
                    com o programa de mentoria, diversificamos ainda mais estes talentos!
                  </Paragraph>
                </Col>
              </Row>
            </Space>
          </div>
          <div className="section-3">
            <Row justify="space-around" align="middle" xs={21} sm={19}>
              <Col span={5}>
                <Image src={skateBoyImage} />
              </Col>
              <Col span={10} justify="center" align="middle" >
                <CardModel height="small" width = "default" color="primary" hoverable>
                  <Paragraph alignment="center">
                    Portanto, para nós, você é uma pessoa mais experiente que <strong>acompanha</strong> de
                    perto, <strong>orienta e estimula um jovem iniciante em sua jornada de
                    desenvolvimento</strong> pessoal e profissional.
                  </Paragraph>
                </CardModel>
              </Col>
              <Col span={5}>
                <Image src={hatGirlImage} />
              </Col>
            </Row>
            <Row justify="center">
                <Paragraph alignment="center">
                  esta página foi criada para informar como funciona ser mentor no Semear.
                </Paragraph>
            </Row>
          </div>
          <Row justify="center" style={{ marginBottom: '-250px' }}>
            <Image src={waveImage} />
          </Row>
        </Space>
      </Section>
      <Wave direction="up" outsideColor="#11115d" innerColor="#FFF" />
    </Fragment>
  );
}
