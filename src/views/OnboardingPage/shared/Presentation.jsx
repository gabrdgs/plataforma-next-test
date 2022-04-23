import React, { Fragment } from 'react';
import { Row, Col, Card, Space } from 'antd';
import Image from 'next/image';

import { NavBarGeneral } from '../../../components/NavBarGeneral';
import { HeadingModel } from '../../../components/HeadingModel';
import { ParagraphModel } from '../../../components/ParagraphModel';
import { ContainerModel } from '../../../components/ContainerModel';
import { Video } from '../../../components/Video';
import { ButtonModel } from '../../../components/ButtonModel';
import { SocialMedia } from '../../../components/SocialMedia';

import layout from '../../shared/Layout';

import handsImage from '../../../assets/images/onboardingPage/shared/hands.svg';
import percentageStudents from '../../../assets/images/onboardingPage/shared/percentage-students.jpg';
import salaryGap from '../../../assets/images/onboardingPage/shared/salary-gap.jpg';
import mentoring from '../../../assets/images/onboardingPage/shared/mentoring.jpg';
import networking from '../../../assets/images/onboardingPage/shared/networking.jpg';
import scholarship from '../../../assets/images/onboardingPage/shared/scholarship.jpg';
import prosperityCycle from '../../../assets/images/onboardingPage/shared/prosperity-cycle.jpg';

const CONTAINER_COLOR = 'greyFive';

export default function Presentation({ onClick, user }) {
  const pillarsContent = [
    {
      title: 'Bolsas',
      image: <Image src={scholarship} alt="Bolsas auxilio" />,
      subtitle: 'Bolsa com duração de 1 ano, ',
      text: 'que consiste em um auxílio financeiro durante o primeiro ano do jovem na universidade, para possibilitar mais foco nos estudos e menos preocupações financeiras.',
    },
    {
      title: 'Mentorias',
      image: <Image src={mentoring} alt="Mentorias" />,
      subtitle: 'A mentoria, ',
      text: 'que é o coração do Semear, sendo um suporte acadêmico, profissional e socioemocional durante a graduação com profissionais de sucesso de diversas empresas.',
    },
    {
      title: 'Rede de Contatos',
      image: <Image src={networking} alt="Rede de contatos" />,
      subtitle: 'Acesso a uma rede de contatos, ',
      text: 'onde os jovens encontrarão oportunidades profissionais, expansão da visão de mundo e consciência social por meio das conexões criadas.',
    },
  ];

  const buttonInfo = user === 'mentor' ? 'mentorado' : 'mentor';

  return (
    <Fragment>
      <NavBarGeneral>
        <Row justify="end">
          <Col pull={6}>
            <ButtonModel>{`Quero um ${buttonInfo}`}</ButtonModel>
          </Col>
        </Row>
      </NavBarGeneral>
      <ContainerModel color={CONTAINER_COLOR}>
        <Space direction="vertical" size={layout.space.container} style={{ width: '100%' }}>
          <ContainerModel color="primary">
            <Row justify="center" align="middle" style={{ padding: '40px 0' }}>
              <Col {...layout.columns.twoColumnTxt}>
                <HeadingModel level={1} color="primaryLight">
                  Seja bem vindo(a)!
                </HeadingModel>
                <ParagraphModel size="large" color="primaryLight">
                  Vamos explicar nesta seção sobre o Instituto Semear, o Programa de Mentoria Social
                  e qual o passo a passo, para se tornar um(a) mentorado(a) na nossa rede e realizar
                  a sua primeira mentoria por meio da nossa plataforma.
                </ParagraphModel>
              </Col>
              <Col {...layout.columns.twoColumnImg}>
                <Row justify="center" style={{ transform: 'rotate(20deg)' }}>
                  <Col {...layout.imageSize}>
                    <Image src={handsImage} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Space direction="vertical" size={layout.space.elements} style={{ width: '100%' }}>
              <Row justify="center">
                <Col {...layout.columns.oneColumn}>
                  <ParagraphModel size="large" color="default">
                    Para começar, assista ao vídeo a seguir e conheça mais sobre a nossa
                    organização.
                  </ParagraphModel>
                </Col>
              </Row>
              <Row justify="center">
                <Video
                  youtubeID="uJUhDhMRNqw"
                  title="Apresentação Institucional"
                  bgColor="primary"
                  colorButton="primary"
                  bgImage="tutorialone"
                  width="middle"
                />
              </Row>
            </Space>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="space-around">
              <Col {...layout.columns.twoColumnInfoText}>
                <Space direction="vertical" size={20} style={{ width: '100%' }}>
                  <HeadingModel level={2} color="primary" underline>
                    Quem nós somos?
                  </HeadingModel>
                  <ParagraphModel>
                    O Instituto Semear é uma Organização não Governamental que olha para a realidade
                    diagnosticada pelo IBGE de que a cada 100 jovens universitários de baixa renda,
                    apenas 15 concluem o ensino superior.
                  </ParagraphModel>
                  <ParagraphModel>
                    Este cenário se torna ainda mais preocupante quando levamos em conta o ciclo da
                    pobreza, que representa a alta correlação entre Renda vs Escolaridade. Isto
                    porque em uma família de baixa renda, para prover sustento, os filhos precisam
                    trabalhar desde jovens e, consequentemente, param de estudar mais cedo, o que os
                    colocam em empregos com baixos níveis salariais.
                  </ParagraphModel>
                </Space>
              </Col>
              <Col {...layout.columns.twoColumnInfo}>
                <Image src={percentageStudents} />
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Space direction="vertical" size={layout.space.elements} style={{ width: '100%' }}>
              <Row justify="space-around" align="middle">
                <Col {...layout.columns.twoColumnInfo} order={0}>
                  <Image src={salaryGap} />
                </Col>
                <Col {...layout.columns.twoColumnInfoText} order={1}>
                  <Space
                    direction="vertical"
                    size={layout.space.paragraph}
                    style={{ width: '100%' }}
                  >
                    <ParagraphModel>
                      Quando um jovem de baixa renda quebra as barreiras sociais e adentra o Ensino
                      Superior, ele tem a chance de romper com esse ciclo vicioso e dar a
                      oportunidade de uma nova realidade para sua família, visto que o alto nível de
                      escolaridade garante maiores níveis salariais, já que a diferença da média
                      salarial entre um indivíduo com ensino médio completo e um com ensino superior
                      completo é de 3.400 reais.
                    </ParagraphModel>
                    <ParagraphModel>
                      Entretanto, com os altos índices de evasão universitária, esse jovem pode não
                      conseguir quebrar o ciclo vicioso da pobreza, uma vez que não encontra os
                      recursos financeiros e emocionais para se manter nesta nova realidade.
                    </ParagraphModel>
                  </Space>
                </Col>
              </Row>
              <Row justify="center">
                <Col {...layout.columns.oneColumn}>
                  <ParagraphModel>
                    A partir desse cenário, o Semear reconhece que não há uma má distribuição de
                    talentos, mas sim uma má distribuição de oportunidades.
                  </ParagraphModel>
                  <ParagraphModel strong>
                    Sendo assim, o Instituto tem como objetivo romper com a evasão no Ensino
                    Superior e promover o desenvolvimento de jovens universitários de baixa renda,
                    quebrando o ciclo da pobreza – possibilitando a empregabilidade e gerando
                    impacto social.
                  </ParagraphModel>
                </Col>
              </Row>
              <Row justify="center">
                <Col {...layout.columns.oneColumn}>
                  <Row justify="center">
                    <Image src={prosperityCycle} />
                  </Row>
                </Col>
              </Row>
            </Space>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="center">
              <Col {...layout.columns.oneColumn}>
                <Space direction="vertical" size={20} style={{ width: '100%' }}>
                  <HeadingModel level={2} color="primary" underline>
                    Qual é a nossa missão?
                  </HeadingModel>
                  <ParagraphModel>
                    Desenvolver e conectar, por meio do incentivo à educação, líderes comprometidos
                    com os desafios sociais e que atuem como agentes multiplicadores para um Brasil
                    melhor e mais justo.
                  </ParagraphModel>
                  <ParagraphModel>
                    Nós acreditamos que quem viveu na pele os maiores desafios sociais tem uma
                    paixão maior por resolvê-los e por isso acreditamos no efeito multiplicador do
                    Semear. O impacto que você gera irá impactar muitas outras pessoas!
                  </ParagraphModel>
                </Space>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="center">
              <Col {...layout.columns.oneColumn}>
                <Space direction="vertical" size={20} style={{ width: '100%' }}>
                  <HeadingModel level={3} color="primary">
                    E como fazemos isso?
                  </HeadingModel>
                  <ParagraphModel strong>Atuamos à partir dos nossos 3 pilares:</ParagraphModel>
                  <Row justify="space-around" gutter={48}>
                    {pillarsContent.map((item, index) => (
                      <Fragment key={`pillar-${index + 1}`}>
                        <Col {...layout.columns.threeColumns}>
                          <HeadingModel level={3} color="orange" alignment="center">
                            {item.title}
                          </HeadingModel>
                          <Row justify="center">
                            <Space
                              direction="vertical"
                              size={layout.space.paragraph}
                              style={{ width: '100%' }}
                            >
                              <Row justify="center">{item.image}</Row>
                              <ParagraphModel>
                                <strong>{item.subtitle}</strong>
                                {item.text}
                              </ParagraphModel>
                            </Space>
                          </Row>
                        </Col>
                      </Fragment>
                    ))}
                  </Row>
                </Space>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="end" align="middle">
              <Col {...layout.columns.oneColumn} pull={1}>
                <Row justify="end" align="middle">
                  <ButtonModel
                    color="quinary"
                    width="default"
                    type="primary"
                    onClick={() => {
                      onClick(1);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Avançar
                  </ButtonModel>
                </Row>
              </Col>
            </Row>
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
