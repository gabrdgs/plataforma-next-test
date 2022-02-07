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
      <Row gutter={[32, 16]} justify="center" align="middle">
        <Col
          span={8}
          offset={1}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 22, offset: 0 }}
          md={{ span: 20, offset: 1 }}
          lg={{ span: 20, offset: 1 }}
          xl={{ span: 12, offset: 1 }}
        >
          <Space direction="vertical" size={20}>
            <Row align="middle">
              <Heading>
                <Space>
                  {props.content.title}
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
                </Space>
              </Heading>
            </Row>
            <Paragraph size="large">{props.content.subtitle}</Paragraph>
            <div>
              <Row>
                <Paragraph size="small">Marque uma opção: </Paragraph>
              </Row>
              <Row>
                <NumberRate />
              </Row>
            </div>
          </Space>
        </Col>
        <Col
          span={6}
          offset={1}
          xs={{ span: 18, offset: 1 }}
          sm={{ span: 16, offset: 1 }}
          md={{ span: 12, offset: 1 }}
          lg={{ span: 6, offset: 1 }}
          xl={{ span: 8, offset: 1 }}
        >
          <Image src={props.content.gif} alt="gif" width={400} height={300} layout="responsive" />
        </Col>
      </Row>
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

function ButtonRate(props) {
  return props.index <= props.inputAssessment ? (
    <Button
      key={`btn-${props.index + 1}`}
      shape="circle"
      onClick={props.handleChange}
      value={props.index}
      type="primary"
    >
      {props.index}
    </Button>
  ) : (
    <Button
      key={`btn-${props.index + 1}`}
      shape="circle"
      onClick={props.handleChange}
      value={props.index}
    >
      {props.index}
    </Button>
  );
}

function NumberRate() {
  const [inputAssessment, setInputAssessment] = useState(7);
  const [inputClicked, setInputClicked] = useState(false);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    setInputAssessment(value);
    setInputClicked(true);
  };

  return (
    <Rate
      defaultValue={7}
      count={10}
      character={({ index }) => (
        <ButtonRate
          index={index + 1}
          inputAssessment={inputAssessment}
          handleChange={handleChange}
        />
      )}
    />
  );
}
