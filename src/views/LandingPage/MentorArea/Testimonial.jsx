import { Fragment } from 'react';
import { Button, Col, Row, Typography, Card, Space, List, Avatar } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

import { Container } from '../../../components/Container';
import { Section } from '../../../components/Section';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { CardModel } from '../../../components/CardModel';
import { Wave } from '../../../components/Wave';

import imageProfile1 from '../../../assets/images/mockPersonas/mentor-1.png';
import imageProfile2 from '../../../assets/images/mockPersonas/mentor-2.png';
import imageProfile3 from '../../../assets/images/mockPersonas/mentor-3.png';
import linkedinImage from '../../../assets/images/brands/linkedin.png';

const personas = [
  {
    name: ' Camila Cintra',
    subtitle: 'You made it so simple.',
    text: '"Há tempos eu vinha sentindo vontade de contribuir com o crescimento de outras pessoas e colocar minha vivência a serviço disso. Conforme vou crescendo, percebo que recebi muito da vida e que às vezes uma palavra, um gesto ou uma dica, pode transformar a vida de alguém, assim como a minha foi também transformada."',
    profession: 'Researcher & Brand Strategist - Float',
    imageProfile: imageProfile1,
    linkedin: 'https://www.linkedin.com/in/camila-cintra-0064348a/',
  },
  {
    name: ' Giovanni Luigi',
    subtitle: 'Better than all the rest.',
    text: '"Eu encontrei muitas histórias parecidas com a minha, o que me fez refletir muito sobre propósito, acho incrível o efeito que os jovens têm sobre a gente. Assim como compartilhamos experiência e conhecimentos, eles fornecem energia e esperança!"',
    profession: 'Digital Data Marketing Specialist - Publicis Brasil',
    imageProfile: imageProfile2,
    linkedin: 'https://www.linkedin.com/in/giovanni-luigi-mkt/',
  },
  {
    name: ' Lucas Carvalho',
    subtitle: 'Must have service',
    text: '"A oportunidade de dividir anseios, dúvidas, perspectivas de carreira e ensinamentos com jovens tão atentos é, sem dúvida, excepcional e um exercício de aprendizado. Tenho um carinho especial pela mentoria que me possibilitou conhecer um jovem inteligente, cheio de sonhos e que tem uma trajetória muito parecida com a que eu tive."',
    profession: 'Advogado Júnior - Demarest Advogados',
    imageProfile: imageProfile3,
    linkedin: 'https://www.linkedin.com/in/lucas-vieira-carvalho-62a8aa18b/',
  },
];

export default function Testimonial() {
  return (
    <Fragment>
      <Section bgColor="secondary">
      <Container color='secondary'>
        <Heading level={2} alignment="center" color="secondary">
          Mentores da Rede Semear
        </Heading>
        <br></br>
        <br></br>
        <Row gutter={[48, 48]}>
          {personas.map((persona, index) => (
            <Col span={8} key={`card-test-${index}`}>
              <CardModel width="half" height='middle' color="default">
                <Row>
                  <Image src={persona.imageProfile} alt="image" width={180} height={180} />
                </Row>
                <br></br>
                <Paragraph size='small' italic>{persona.text}</Paragraph>
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
    </Fragment>
  );
}
