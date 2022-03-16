import React, { Fragment, useState } from 'react';
import { Col, Row, Rate, Space, Modal, Button } from 'antd';
import Image from 'next/image';
import { Paragraph } from '../../../components/Paragraph';
import { Heading } from '../../../components/Heading';

import { InfoCircleOutlined } from '@ant-design/icons';

const StepAssessment = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <Heading>{props.content.title}</Heading>
      <Space direction="vertical" size={20}>
        <Paragraph size="large">
          <Col span={20}>{props.content.subtitle}</Col>
        </Paragraph>
        <Row>
          <Button onClick={showModal} align="middle" danger>
            Nível Neutro <InfoCircleOutlined />
          </Button>
          <Modal
            title={<Paragraph>Nível Neutro</Paragraph>}
            centered={true}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleOk}
            footer={[
              <Button type="primary" key="confirm" onClick={handleOk}>
                <Paragraph color="secondary">OK</Paragraph>
              </Button>,
            ]}
          >
            <Paragraph>{props.content.neutral}</Paragraph>
          </Modal>
        </Row>
        <div>
          <Row>
            <Paragraph size="small">Marque uma opção: </Paragraph>
          </Row>
          <Row>
            <NumberRate />
          </Row>
        </div>
      </Space>
    </Fragment>
  );
};

export default StepAssessment;

const assessmentStatus = {
  1: {
    label: 'Nada Satisfeito',
    class: 'rangeStatus--danger',
  },
  2: {
    label: 'Nada Satisfeito',
    class: 'rangeStatus--danger',
  },
  3: {
    label: 'Pouco Satisfeito',
    class: 'rangeStatus--warning',
  },
  4: {
    label: 'Pouco Satisfeito',
    class: 'rangeStatus--warning',
  },
  5: {
    label: 'Minimamente Satisfeito',
    class: 'rangeStatus--attention',
  },
  6: {
    label: 'Minimamente Satisfeito',
    class: 'rangeStatus--attention',
  },
  7: {
    label: 'Satisfeito',
    class: 'rangeStatus--neutral',
  },
  8: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
  9: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
  10: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
};

function NumberRate() {
  const [inputAssessment, setInputAssessment] = useState(7);
  const [inputClicked, setInputClicked] = useState(false);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    setInputAssessment(value);
    setInputClicked(true);
  };

  const type = (index) => {
    return index <= inputAssessment ? 'primary' : '';
  };

  return (
    <Rate
      defaultValue={7}
      count={10}
      character={({ index }) => (
        <Button
          key={`btn-${index + 1}`}
          shape="circle"
          onClick={handleChange}
          value={index}
          type={type(index)}
        >
          {index}
        </Button>
      )}
    />
  );
}
