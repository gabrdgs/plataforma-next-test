import { Button, Col, Row, Typography, Card, Space } from 'antd';
import Image from 'next/image';

const { Title, Text, Link } = Typography;

import  CarouselPartners  from './CarouselPartners';
import { Section } from '../../../components/Section';
import { Container } from '../../../components/Container';
import { Heading } from '../../../components/Heading';


function Partners({ id }) {
  return (
    <Section id={id} bgColor="default">
      <Container>
          <Heading level={2} alignment="center">Quem apoia e está junto com a gente</Heading>
          <Heading level={3} color="tertiary" alignment="center">Conheça as empresas que fazem parte dessa história!</Heading>
        <br/><br/><br/>
        <Row gutter={[48, 48]}>
          <Col gutter={[48, 48]} xs={{ span: 25 }} lg={{ span: 25 }}>
                <CarouselPartners/>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Partners;


