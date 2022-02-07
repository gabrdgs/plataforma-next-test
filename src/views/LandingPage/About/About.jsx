import { Button, Col, Row, Typography, Modal, Space } from 'antd';
import Image from 'next/image';

const { Title, Text, Link } = Typography;

import { Section } from '../../../components/Section';
import { Container } from '../../../components/Container';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import  { CardModel }  from '../../../components/CardModel';


function About({ id }) {
  return (
    <Section id={id} bgColor="default">
      <Container>
        <Row gutter={[90, 60]} align='middle' >
          <Col xs={{ span: 24 }} lg={{ span: 12 }} align='middle'>
            <Heading level={2} color="primary">A Universidade foi o primeiro passo, e agora?</Heading>
            <Heading level={3} color="tertiary">Conectamos jovens a oportunidades reais</Heading>
            <Paragraph size='small'>
                O 
                <Link href="https://www.isemear.org.br" target="_blank" rel="noreferrer">
                 {` Instituto Semear `}
                </Link>
                tem como objetivo diminuir a evasão universitária e fornecer aos jovens de baixa renda as condições para que se desenvolvam durante a graduação. Desde então, selecionamos, desenvolvemos e conectamos estudantes universitários de alto potencial que queiram atuar como agentes multiplicadores por um Brasil melhor e mais justo.
            </Paragraph>
            <Paragraph size='small'>
            Alcançamos esse objetivo por meio de Networking, oferecendo uma ampla rede de contatos e da Mentoria Social, onde estes jovens podem trocam experiências com profissionais renomados nas áreas que atuam. Por acreditarmos na potência do aprendizado social através do nosso Programa de Mentoria, queremos convidar você a imergir nessa jornada que mudará o seu futuro!
            </Paragraph>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }} align='middle'>
            <Row gutter={[48, 48]}>
              <Space size="middle">
                <CardModel color ="secondary" width="small" height="small">
                  <Heading color ="secondary" level={1}>1400</Heading>
                  <Heading color ="secondary" level={5}>Jovens Impactados<br/> pelos projetos do <br/> ISemear</Heading>
                </CardModel>
                <CardModel  color ="tertiary" width="small" height="small">
                  <Heading color ="secondary" level={1}>1500</Heading>
                  <Heading color ="secondary" level={5}>Jovens Impactados <br/> por nossos canais <br/> digitais</Heading>
                </CardModel>
              </Space>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default About;
