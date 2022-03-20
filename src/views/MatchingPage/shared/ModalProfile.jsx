import React from 'react';
import Image from 'next/image';
import { Button, Row, Col, Card, Modal, Space, Tooltip } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';
import { Children } from 'react/cjs/react.production.min';

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
            <Space size={5}>
              <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
                <Image src={linkedinIcon} alt="logo" objectFit="contain" width="24" height="24" />
              </a>
              {`${props.persona.name} (${props.persona.pronoun})`}
            </Space>
          </Heading>
        </Row>
        <Paragraph size="small">{props.persona.description}</Paragraph>
        {props.children}
      </Space>
    </Modal>
  );
}
