import { Fragment } from 'react/cjs/react.production.min';
import { Col, Row, Space, List, Avatar } from 'antd';
import Image from 'next/image';

import { Section } from '../../../components/Section';
import { Container } from '../../../components/Container';
import { Wave } from '../../../components/Wave';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import Testimonial from './Testimonial';

import mentorImage from '../../../assets/images/characters/mentors.png';
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

const data = [
  {
    number: '1',
    title: 'Seja o responsável por agir para a melhoria de oportunidades educacionais no Brasil',
  },
  {
    number: '2',
    title: 'Seja o responsável por agir para a melhoria de oportunidades educacionais no Brasil',
  },
  {
    number: '3',
    title: 'Conecte-se e faça parte da ampla rede de contatos do Instituto Semear',
  },
];

function MentorArea({ id }) {
  return (
    <Fragment>
      <Section id={id} bgColor="default">
        <Container>
          <Row gutter={[50, 50]} align='middle'>
            <Col xs={{ span: 24 }} offset={2} lg={{ span: 10 }}>
              <div>
                <Image src={mentorImage} width={500} height={500} />
              </div>
            </Col>
              <Col xs={{ span: 24 }} lg={{ span: 11 }}>
                <Heading level={2}>O que posso descobrir nessa jornada?</Heading>
                <Heading level={3} color="senary" level={4}>
                  Jornada do Mentor
                </Heading>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar style={{ backgroundColor: "#ff7139" }}size={40}>{item.number}</Avatar>}
                        title={<Paragraph>{item.title}</Paragraph>}
                      />
                    </List.Item>
                  )}
                />
              </Col>
          </Row>
        </Container>
      </Section>
      <Wave direction="down" innerColor="#ff7139" outsideColor="#fff" />
      <Testimonial />
    </Fragment>
  );
}

export default MentorArea;
