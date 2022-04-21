import { Col, Row, Space } from 'antd';

import { Section } from '../../../components/Section';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { LeadForm } from '../../../components/LeadForm';
import { SocialMedia } from '../../../components/SocialMedia';

export default function Footer({ id }) {
  return (
    <Section bgColor="dark">
      <Row justify="center">
        <Col span={10}>
          <Space direction="vertical" style={{ width: '100%' }} size={60}>
            <div>
              <Heading alignment="center" level={3} color="secondary">
                Gostou da nossa proposta ?
              </Heading>
              <Paragraph alignment="center" color="secondary">
                Estamos trabalhando para trazer para vocês a melhor e mais amada plataforma de
                mentoria do Brasil, se você tem interesse em ser jovem ou mentor, assine nossa
                newsletter e receba todas as novidades e atualizações sobre o funcionamento da nossa
                plataforma.
              </Paragraph>
              <LeadForm />
            </div>
            <Row justify="center">
              <SocialMedia />
            </Row>
          </Space>
        </Col>
      </Row>
    </Section>
  );
}
