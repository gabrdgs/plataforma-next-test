import styles from './SeedArea.module.scss';

import { Col, Row, Typography, Card, Space, List, Avatar } from 'antd';
import Image from 'next/image';

const { Title } = Typography;

import { Section } from '../../../components/Section';
import { Container } from '../../../components/Container';
import { Wave } from '../../../components/Wave';
import { Fragment } from 'react';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { ButtonModel } from '../../../components/ButtonModel';
import { CardModel } from '../../../components/CardModel';


import journeyImage from '../../../assets/images/landingPage/seedArea/journeySeed.png';
import seedPointsImage from '../../../assets/images/characters/rocket-girl.png';
import imageProfile1 from '../../../assets/images/mockPersonas/student-1.png';
import imageProfile2 from '../../../assets/images/mockPersonas/student-2.png';
import imageProfile3 from '../../../assets/images/mockPersonas/student-3.png';
import linkedinImage from '../../../assets/images/brands/linkedin.png';

const personas = [
  {
    name: ' Pedro Masetti',
    text: '"A oportunidade de poder me conectar através das mentorias com pessoas já ambientadas no mercado de trabalho vêm trazendo diversos benefícios, e principalmente, auxiliando no meu autoconhecimento"',
    profession: 'Engenharia Ambiental',
    imageProfile: imageProfile1,
    linkedin: 'https://www.linkedin.com/in/pedro-masetti-3535321a9/',
  },
  {
    name: ' Mariana Ferraz',
    text: '"Na primeira mentoria eu não sabia quem eu era, definir meus sonhos ou para onde eu estava indo. Ter a oportunidade de ser mentorada no primeiro semestre da minha (tão sonhada) faculdade fez total diferença. Hoje, sinto que me conheço mais, sei como e o que estou fazendo para alcançar meus sonhos."',
    profession: 'Engenharia de Produção',
    imageProfile: imageProfile2,
    linkedin: 'https://www.linkedin.com/in/mariana-ferraz-991181215/',
  },
  {
    name: ' Jéssica Gonsalves',
    text: '"Ser mentoranda me permitiu tomar consciência do meu próprio protagonismo e em como consigo pontencializá-lo na minha jornada. Mais do que isso, me permitiu construir em conjunto com a minha mentora, um processo sistêmico de reflexão, concepção e tomada de decisões."',
    profession: 'Engenharia Elétrica',
    imageProfile: imageProfile3,
    linkedin: 'https://www.linkedin.com/in/gonsalvesjessica/',
  },
];

const data = [
  {
    number: 1,
    title: 'Converse com mentores que tiveram sucesso na escolha de suas carreiras',
  },
  {
    number: 2,
    title: 'Conheça programas para encontrar oportunidades em organizações parceiras',
  },
  {
    number: 3,
    title: 'Encontre jovens que passaram pela mesma vivência e hoje são destaques no mercado',
  },
];

function SeedArea({
  id,
  color="default"
}) {
  return (
    <Fragment>
      <Wave direction="down" innerColor="#11115d" outsideColor="#fff" />
      <Section id={id} bgColor="primary">
          <Container color='primary'>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={{ span: 24 }} offset={1} lg={{ span: 12 }}>
              <Image src={journeyImage} width={500} height={500} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 10 }}>
              <div>
                <CardModel color="default" width="middle" height="middle">
                  <Space direction="vertical" size={[3, 3]}>
                    <Heading level={3}>A cada nova DESCOBERTA, uma nova CONQUISTA!</Heading>
                    <Paragraph>
                      A sua Jornada no ISemear é construída com base em um conjunto de ferramentas e
                      métodos que servem para jovens que sentem na pele as dificuldades de se graduar
                      e se tornar protagonista da sua própria carreira.
                    </Paragraph>
                    <br />
                    <br />
                    <ButtonModel type="primary" width="full" height='large' shape="round">
                      Inscreva-se
                    </ButtonModel>
                    <br />
                    <br />
                    <Paragraph>
                      Com a rede de contatos do ISemear, contamos com apoio demais de 600 mentores
                      cadastrados de todas asempresas parceiras e das mais diversas áreas!
                    </Paragraph>
                  </Space>
                </CardModel>
              </div>
            </Col>
          </Row>
          </Container>
          <Container color='primary'>
          <br></br>
          <br></br>  
          <Space direction='vertical' size="middle">
          <Row gutter={[48, 48]} align='middle'>
            <Col xs={{ span: 24 }} offset={1} lg={{ span: 12 }} >
              <Heading color="secondary">O que posso aprender nessa jornada?</Heading>
              <Heading color="senary" level={4}>
                Jornada do Jovem
              </Heading>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: "#7fff70"}} size={40}>{item.number}</Avatar>}
                      title={<Paragraph color='secondary'>{item.title}</Paragraph>}
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 10 }}>
              <div>
                <Image src={seedPointsImage} width={500} height={500} />
              </div>
            </Col>
          </Row>
          </Space>
          </Container>
          <br></br>
          <br></br>
          <br></br> 
          <Container color='primary'>
          <Space />
          <Heading level={2} color="secondary" alignment="center">
            Quem ja venceu essa jornada
          </Heading>
          <br></br> 
          <Row gutter={[48, 48]}>
            {personas.map((persona, index) => (
              <Col span={8} key={`card-${index}`}>
                <CardModel width="half" height='middle' color="default">
                  <Row>
                    <Image src={persona.imageProfile} alt="image" width={180} height={180} />
                  </Row>
                  <br></br>
                  <Paragraph size='small'italic>{persona.text}</Paragraph>
                  <br></br>
                  <Row justify="start"> 
                    <Space>
                    <a href={persona.linkedin} target="_blank" rel="noreferrer">
                      <Image src={linkedinImage} width={25} height={25} />
                    </a>
                    <Heading level={4}>{persona.name}</Heading>
                    </Space>
                  </Row>
                  <Heading level={5} color='tertiary'>{persona.profession}</Heading>
                </CardModel>
              </Col>
            ))}
          </Row>
          </Container>
      </Section>
      <Wave direction="down" innerColor="#fff" outsideColor="#11115d" />
    </Fragment>
  );
}

export default SeedArea;
