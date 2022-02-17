import React from 'react';
import Image from 'next/image';
import { Button, Row, Col, Card, Modal, Space } from 'antd';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

export default function ModalProfile(props) {
  return (
    <Modal
      visible={props.isModalVisible}
      centered={true}
      onCancel={props.handleCancel}
      footer={[
        <Button key="cancel" onClick={props.handleCancel} type="primary">
          OK
        </Button>,
      ]}
    >
      <Space direction="vertical" size={5}>
        <Row align="middle">
          <Col span={8}>
            <Image src={props.persona.imageProfile} alt="mentor" />
          </Col>
        </Row>
        <Row align="middle">
          <Heading level={4}>
            <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
              <Image src={linkedinIcon} alt="logo" objectFit="contain" width="24" height="24" />
            </a>
            {`${props.persona.name} (${props.persona.pronoun})`}
          </Heading>
        </Row>
        <Paragraph size="small">{props.persona.description}</Paragraph>
        <Card>
          <Card.Grid style={{ width: '100%' }}>
            <Paragraph strong> Informações Acadêmicas</Paragraph>
            <Paragraph size="small">{`Faculdade: ${props.persona.college}`}</Paragraph>
            <Paragraph size="small">{`Curso: ${props.persona.course}`}</Paragraph>
          </Card.Grid>
        </Card>
      </Space>
    </Modal>
  );
}

