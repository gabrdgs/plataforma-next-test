import React, { Fragment } from 'react';
import { Row, Col, Card, Space } from 'antd';
import Image from 'next/image';

import { NavBarGeneral } from '../../../components/NavBarGeneral';
import { HeadingModel } from '../../../components/HeadingModel';
import { ParagraphModel } from '../../../components/ParagraphModel';
import { ContainerModel } from '../../../components/ContainerModel';
import { Video } from '../../../components/Video';
import { ButtonModel } from '../../../components/ButtonModel';

import handsImage from '../../../assets/images/onboardingPage/shared/hands.svg';
import percentageStudents from '../../../assets/images/onboardingPage/shared/percentage-students.jpg';
import salaryGap from '../../../assets/images/onboardingPage/shared/salary-gap.jpg';
import mentoring from '../../../assets/images/onboardingPage/shared/mentoring.jpg';
import networking from '../../../assets/images/onboardingPage/shared/networking.jpg';
import scholarship from '../../../assets/images/onboardingPage/shared/scholarship.jpg';
import prosperityCycle from '../../../assets/images/onboardingPage/shared/prosperity-cycle.jpg';

const PARAGRAPH_SPACE = 20;
const CONTAINER_SPACE = 80;
const ELEMENTS_SPACE = 40;
const LAYOUT_ONECOLLUMN = {
  xs: { span: 21 },
  sm: { span: 21 },
};
const LAYOUT_TWOCOLLUMNS_TEXT = {
  xs: { span: 13 },
  sm: { span: 13 },
};
const LAYOUT_TWOCOLLUMNS_IMG = { xs: { span: 8 }, sm: { span: 8 } };
const SIZE_IMAGE_TWOCOLLUMNS = { xs: { span: 18 }, sm: { span: 18 } };
const CONTAINER_COLOR = 'greyFive';

export default function Presentation({}) {
  const pillarsContent = [
    {
      title: 'Bolsas',
      image: <Image src={scholarship} passHref alt="Bolsas auxilio" />,
      subtitle: 'Bolsa com duração de 1 ano, ',
      text: 'que consiste em um auxílio financeiro durante o primeiro ano do jovem na universidade, para possibilitar mais foco nos estudos e menos preocupações financeiras.',
    },
    {
      title: 'Mentorias',
      image: <Image src={mentoring} passHref alt="Mentorias" />,
      subtitle: 'A mentoria, ',
      text: 'que é o coração do Semear, sendo um suporte acadêmico, profissional e socioemocional durante a graduação com profissionais de sucesso de diversas empresas.',
    },
    {
      title: 'Rede de Contatos',
      image: <Image src={networking} passHref alt="Rede de contatos" />,
      subtitle: 'Acesso a uma rede de contatos, ',
      text: 'onde os jovens encontrarão oportunidades profissionais, expansão da visão de mundo e consciência social por meio das conexões criadas.',
    },
  ];

  return (
    <Fragment>
      <NavBarGeneral />
      <ContainerModel color={CONTAINER_COLOR}>
        <Space direction="vertical" size={CONTAINER_SPACE} style={{ width: '100%' }}>
          <ContainerModel color="primary">
            <Row justify="center" align="middle" style={{ padding: '40px 0' }}>
              <Col {...LAYOUT_TWOCOLLUMNS_TEXT}>
                <HeadingModel level={1} color="primaryLight">
                  Seja bem vindo(a)!
                </HeadingModel>
                <ParagraphModel size="large" color="primaryLight">
                  Vamos explicar nesta seção sobre o Instituto Semear, o Programa de Mentoria Social
                  e qual o passo a passo, para se tornar um(a) mentorado(a) na nossa rede e realizar
                  a sua primeira mentoria por meio da nossa plataforma.
                </ParagraphModel>
              </Col>
              <Col {...LAYOUT_TWOCOLLUMNS_IMG}>
                <Row justify="center">
                  <Col {...SIZE_IMAGE_TWOCOLLUMNS }>
                    <Image src={handsImage} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Space direction="vertical" size={ELEMENTS_SPACE} style={{ width: '100%' }}>
              <Row justify="center">
                <ParagraphModel size="large" color="default">
                  Para começar, assista ao vídeo a seguir e conheça mais sobre a nossa organização.
                </ParagraphModel>
              </Row>
              <Row justify="center">
                <Video
                  youtubeID="uJUhDhMRNqw"
                  title="Apresentação Institucional"
                  bgColor="primary"
                  width="middle"
                />
              </Row>
            </Space>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="center">
              <Col {...LAYOUT_TWOCOLLUMNS_TEXT}>
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
              <Col {...LAYOUT_TWOCOLLUMNS_IMG}>
                <Row justify="center">
                  <Col {...SIZE_IMAGE_TWOCOLLUMNS }>
                    <Image src={percentageStudents} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Space direction="vertical" size={ELEMENTS_SPACE} style={{ width: '100%' }}>
              <Row justify="center" align="middle">
                <Col {...LAYOUT_TWOCOLLUMNS_IMG}>
                  <Row justify="center">
                    <Col {...SIZE_IMAGE_TWOCOLLUMNS }>
                      <Image src={salaryGap} />
                    </Col>
                  </Row>
                </Col>
                <Col {...LAYOUT_TWOCOLLUMNS_TEXT}>
                  <Space direction="vertical" size={PARAGRAPH_SPACE} style={{ width: '100%' }}>
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
                <Col {...LAYOUT_ONECOLLUMN}>
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
                <Col {...LAYOUT_ONECOLLUMN}>
                  <Image src={prosperityCycle} />
                </Col>
              </Row>
            </Space>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="center">
              <Col {...LAYOUT_ONECOLLUMN}>
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
              <Col {...LAYOUT_ONECOLLUMN}>
                <Space direction="vertical" size={20} style={{ width: '100%' }}>
                  <HeadingModel level={3} color="primary">
                    E como fazemos isso?
                  </HeadingModel>
                  <ParagraphModel strong>Atuamos à partir dos nossos 3 pilares:</ParagraphModel>
                  <Row justify="space-around" gutter={48}>
                    {pillarsContent.map((item, index) => (
                      <Col span={7} key={`pillar-${index + 1}`}>
                        <HeadingModel level={3} color="orange" alignment="center">
                          {item.title}
                        </HeadingModel>
                        <Row justify="center">
                          <Col span={21}>
                            <Space direction="vertical" size={PARAGRAPH_SPACE}>
                              {item.image}
                              <ParagraphModel size="small">
                                <strong>{item.subtitle}</strong>
                                {item.text}
                              </ParagraphModel>
                            </Space>
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                </Space>
              </Col>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR}>
            <Row justify="end" align="middle">
              <Col span={19} />
              <ButtonModel color="quinary" width="small" type="primary">
                Avançar
              </ButtonModel>
            </Row>
          </ContainerModel>
          <ContainerModel color={CONTAINER_COLOR} />
        </Space>
      </ContainerModel>
    </Fragment>
  );
}
