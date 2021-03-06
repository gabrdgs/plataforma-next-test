import React, { Fragment, useEffect } from 'react';
import { Row, Col, Space } from 'antd';
import Image from 'next/image';

import { NavBarGeneral } from '../../../components/NavBarGeneral';
import { HeadingModel } from '../../../components/HeadingModel';
import { ParagraphModel } from '../../../components/ParagraphModel';
import { ContainerModel } from '../../../components/ContainerModel';
import { Video } from '../../../components/Video';
import { ButtonModel } from '../../../components/ButtonModel';
import { SocialMedia } from '../../../components/SocialMedia';

import Styles from './Onboarding.module.scss';

import layout from '../../shared/Layout';

import rocket from '../../../assets/images/onboardingPage/shared/rocket.svg';
import maslowPyramid from '../../../assets/images/onboardingPage/shared/maslow-pyramid.jpg';
import mentorPointsOne from '../../../assets/images/onboardingPage/shared/mentor_points_one.jpg';
import mentorPointsTwo from '../../../assets/images/onboardingPage/shared/mentor_points_two.jpg';
import mentorPointsThree from '../../../assets/images/onboardingPage/shared/mentor_points_three.jpg';
import mentorPointsFour from '../../../assets/images/onboardingPage/shared/mentor_points_four.jpg';
import assessmentGraphic from '../../../assets/images/onboardingPage/shared/assessment-graphic.jpg';
import fundationWheel from '../../../assets/images/onboardingPage/shared/fundation-wheel.jpg';
import purposeWheel from '../../../assets/images/onboardingPage/shared/purpose-wheel.jpg';
import professionalWheel from '../../../assets/images/onboardingPage/shared/professional-wheel.jpg';
import numberOne from '../../../assets/images/onboardingPage/shared/number-1.svg';
import numberTwo from '../../../assets/images/onboardingPage/shared/number-2.svg';
import numberThree from '../../../assets/images/onboardingPage/shared/number-3.svg';

const CONTAINER_COLOR = 'greyFive';

export default function MentoringProgram({ content, onClick, user }) {
  const mentorCharacteristicsContent = [
    <Image key="" src={mentorPointsOne} alt="Primeira caracter??sitca de um mentor" />,
    <Image key="" src={mentorPointsTwo} alt="Segunda caracter??sitca de um mentor" />,
    <Image key="" src={mentorPointsThree} alt="Terceira caracter??sitca de um mentor" />,
    <Image key="" src={mentorPointsFour} alt="Quarta caracter??sitca de um mentor" />,
  ];
  const wheelContent = [
    {
      image: <Image src={fundationWheel} alt="Primeira roda da trilha" />,
      text: 'Sendo assim, no primeiro ano da faculdade temos a Roda Alicerce, que foca em resolver problemas relacionados ??s necessidades b??sicas dos jovens e fatores que influenciam na sua capacidade de continuar estudando e no seu rendimento acad??mico.',
      number: <Image src={numberOne} alt="Primeiro item" />,
    },

    {
      image: <Image src={purposeWheel} alt="Segunda roda da trilha" />,
      text: 'Entre o segundo e terceiro ano da faculdade temos a Roda Prop??sito, cuja fun????o ?? ajudar o jovem a explorar caminhos de carreira, passando por uma jornada ligada ao n??vel de conhecimento do jovem sobre si mesmo e a carreira que quer seguir.',
      number: <Image src={numberTwo} alt="Segundo item" />,
    },
    {
      image: <Image src={professionalWheel} alt="Terceira roda da trilha" />,
      text: 'Por fim, entre o quarto e quinto ano os jovens vivenciam a Roda profissional, na qual apoiamos o ingresso no emprego dos sonhos, enfim quebrando o ciclo da pobreza. Nessa roda, ?? poss??vel entendermos se a expectativa de carreira do jovem est?? alinhada com a realidade e o quanto este jovem est?? se preparando para seu primeiro emprego dos sonhos.',
      number: <Image src={numberThree} alt="Terceiro item" />,
    },
  ];

  const userYoutubeID = user === 'mentor' ? 'Or5Im4742A0' : 'zqxlDS0IlyE';

  return (
    <Fragment>
      <ContainerModel color={CONTAINER_COLOR}>
        <Space direction="vertical" size={layout.space.container} style={{ width: '100%' }}>
          <ContainerModel color="primary">
            <Row justify="center" align="middle" style={{ padding: '20px 0' }}>
              <Col {...layout.columns.twoColumnTxt}>
                <Space direction="vertical" style={{ width: '100%' }} size={layout.space.paragraph}>
                  <HeadingModel level={2} color="primaryLight">
                    Agora que voc?? j?? conhece mais o instituto...
                  </HeadingModel>
                  {content.introduction}
                </Space>
              </Col>
              <Col {...layout.columns.twoColumnImg}>
                <Row justify="center" style={{ transform: 'rotate(60deg)' }}>
                  <Col {...layout.imageSize}>
                    <Image src={rocket} alt="imagem foguete" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row justify="center" style={{ paddingBottom: '80px' }}>
              <Video
                youtubeID={userYoutubeID}
                title="Direitos e Deveres do Mentor"
                bgColor="primary"
                colorButton="primary"
                bgImage={`tutorial${user}`}
                width="middle"
              />
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="center">
              <Col {...layout.columns.oneColumn}>
                <Space direction="vertical" size={layout.space.paragraph} style={{ width: '100%' }}>
                  <HeadingModel level={2} color="primary" underline>
                    Programa de Mentoria Social
                  </HeadingModel>
                  <ParagraphModel>
                    O programa de mentoria ?? uma forma de aprendizado social. E o que de fato ?? ser
                    um mentor no Semear?
                    <strong>
                      {' '}
                      O mentor ?? uma pessoa mais experiente que acompanha de perto, orienta e
                      estimula ??? a partir de sua experi??ncia, conhecimento e comportamento ??? um
                      jovem iniciante em sua jornada de desenvolvimento pessoal e profissional.
                    </strong>
                  </ParagraphModel>
                  <Col xs={21} lg={13}>
                    <HeadingModel level={3} color="primary">
                      Sendo assim, algumas caracter??sticas de um bom mentor s??o:
                    </HeadingModel>
                  </Col>
                  <Row justify="space-around" gutter={48}>
                    {mentorCharacteristicsContent.map((item, index) => (
                      <Col
                        {...layout.columns.fourColumns}
                        key={`caractheristic-${index + 1}`}
                        className={Styles.Onboarding__Columns}
                      >
                        <Row justify="center">{item}</Row>
                      </Col>
                    ))}
                  </Row>
                </Space>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="space-around">
              <Col {...layout.columns.twoColumnInfoText}>
                <Space direction="vertical" size={layout.space.paragraph} style={{ width: '100%' }}>
                  <HeadingModel level={2} color="primary" underline>
                    Roda da Trilha
                  </HeadingModel>
                  <ParagraphModel>
                    Aqui no Instituto, em todas as nossas atividades, nos baseamos na teoria de
                    Maslow e de Barrett, que diz que as necessidades humanas s??o hierarquizadas como
                    uma pir??mide. Ou seja, s?? ?? poss??vel chegar ao topo se a base estiver bem
                    consolidada. Usamos esse modelo para, ao longo dos anos, mapear as principais
                    necessidades dos jovens e as agrupar em 16 desafios, contidos em
                    <strong> 3 Rodas da Trilha</strong>.
                  </ParagraphModel>
                </Space>
              </Col>
              <Col {...layout.columns.twoColumnInfo}>
                <div className={Styles.Onboarding__InfographImage}>
                  <Image src={maslowPyramid} alt="piramide de Maslow" />
                </div>
              </Col>
            </Row>
          </ContainerModel>
          {wheelContent.map((item, index) => (
            <ContainerModel color="primaryLight" key={`wheel-${index + 1}`}>
              <Row align="middle">
                <Col span={1} push={2}>
                  <div className={Styles.Onboarding__NumbersImage}>{item.number}</div>
                </Col>
              </Row>
              <Row align="middle" justify="space-around">
                <Col {...layout.columns.twoColumns}>{item.image}</Col>
                <Col {...layout.columns.twoColumns}>
                  <ParagraphModel size="large">{item.text}</ParagraphModel>
                </Col>
              </Row>
            </ContainerModel>
          ))}
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="space-around">
              <Col {...layout.columns.twoColumnInfoText}>
                <Space direction="vertical" size={layout.space.paragraph} style={{ width: '100%' }}>
                  <HeadingModel level={2} color="primary" underline>
                    Assessment
                  </HeadingModel>
                  {content.assessment}
                </Space>
              </Col>
              <Col {...layout.columns.twoColumnInfo}>
                <div className={Styles.Onboarding__InfographImage}>
                  <Image src={assessmentGraphic} alt="imagem gr??fico assessment" />
                </div>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Space direction="vertical" size={layout.space.elements} style={{ width: '100%' }}>
              <Row justify="center">
                <Col {...layout.columns.oneColumn}>
                  <Space
                    direction="vertical"
                    size={layout.space.paragraph}
                    style={{ width: '100%' }}
                  >
                    <HeadingModel level={3} color="primary">
                      Objetivo da mentoria
                    </HeadingModel>
                    {content.goal}
                  </Space>
                </Col>
              </Row>
              <Row justify="center">
                <Col {...layout.columns.oneColumn}>
                  <Space
                    direction="vertical"
                    size={layout.space.paragraph}
                    style={{ width: '100%' }}
                  >
                    <HeadingModel level={3} color="primary">
                      Pr??ximos passos...
                    </HeadingModel>
                    <ParagraphModel>
                      Agora que voc?? j?? est?? por dentro de como funciona a mentoria aqui no Semear,
                      iremos te dizer seus pr??ximos passos!
                    </ParagraphModel>
                  </Space>
                  {content.nextSteps}
                </Col>
              </Row>
            </Space>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Col span={23}>
              <Row justify="end">
                <Row justify="end">
                  <ButtonModel
                    color="primaryText"
                    type="primary"
                    onClick={() => {
                      onClick(0);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Voltar
                  </ButtonModel>
                  <ButtonModel color="default" type="primary" href={`/assessment-${user}`}>
                    Fazer diagn??stico
                  </ButtonModel>
                </Row>
              </Row>
            </Col>
          </ContainerModel>
          <ContainerModel color="primary">
            <Row justify="center" style={{ padding: '20px 0' }}>
              <SocialMedia />
            </Row>
          </ContainerModel>
        </Space>
      </ContainerModel>
    </Fragment>
  );
}
