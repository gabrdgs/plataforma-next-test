import React from 'react';
import Image from 'next/image';
import { Col, Row, Modal } from 'antd';
import 'antd/dist/antd.css';

export default function ModalPicture(props) {
  return (
    <Modal visible={props.isModalVisible} centered={true} onCancel={props.handleCancel} footer={[]}>
      <Row align="middle" justify="center">
        <Col span={24}>
          <Image src={props.persona.imageProfile} alt="mentor" />
        </Col>
      </Row>
    </Modal>
  );
}
