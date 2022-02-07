// import styles from './Hero.module.scss';

import { Button, Col, Row, Typography } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

import { Section } from '../../../components/Section';
import { Container } from '../../../components/Container';
import {Wave} from '../../../components/Wave'

import heroImage from '../../../assets/images/characters/header.png';

import styles from './Hero.module.scss';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { ButtonModel } from '../../../components/ButtonModel';
import { Fragment } from 'react';

function Hero({ id }) {
  return (
    <Fragment>
    <Section id={id} bgColor="primary">
      <Container color='primary'>
        <Row gutter={[48, 48]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Heading level ={1} color="quinary">As conexões que mudarão o seu futuro!</Heading>

            <Paragraph weight='default' color='secondary'>
              A plataforma desenvolvida para mentores e jovens universitários protagonistas que
              juntos buscam aprimorar suas habilidades profissionais e alcançar seus sonhos.
            </Paragraph>

            <Heading level={4} color="secondary">
              As conexões que mudarão o seu futuro!
            </Heading>

            <ButtonModel type="primary" size="large" height='large' shape="round">
              Inscreva-se
            </ButtonModel>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div className={styles.Hero__Image}>
              <Image src={heroImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
    <Wave direction="up" innerColor = '#11115d' outsideColor = '#fff'/>
    </Fragment>
  );
}

export default Hero;
