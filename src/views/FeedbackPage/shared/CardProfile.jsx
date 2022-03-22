import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, message, Col, Row, Card, Space, Divider, Modal } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

import ModalProfile from '../../shared/ModalProfile';
import ModalPicture from '../../shared/ModalPicture';
import IntroductionStep from './IntroductionStep';
import PositiveStep from './PositiveStep';
import NegativeStep from './NegativeStep';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

const mentoringPeriod = 30;
const widthModal = 800;
const options = ['Sim', 'Não'];

export default function CardProfile(props) {
  const invitedDate = new Date(props.persona.invitedDate);
  const acceptedDate = new Date(props.persona.acceptedDate);
  const finalDate = new Date(props.persona.acceptedDate);
  finalDate.setDate(finalDate.getDate() + mentoringPeriod);

  const invitedDateFormated = `${invitedDate.getDate()}-${invitedDate.getMonth()}-${invitedDate.getFullYear()}`;
  const acceptedDateFormated = `${acceptedDate.getDate()}-${acceptedDate.getMonth()}-${acceptedDate.getFullYear()}`;
  const finalDateFormated = `${finalDate.getDate()}-${finalDate.getMonth()}-${finalDate.getFullYear()}`;

  const [isModalFormVisible, setIsModalFormVisible] = useState(false);
  const [isModalProfileVisible, setIsModalProfileVisible] = useState(false);
  const [isModalPictureVisible, setIsModalPictureVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [nextHidden, setNextHidden] = useState(false);
  const [previousHidden, setPreviousHidden] = useState(true);
  const [submitHidden, setSubmitHidden] = useState(true);
  const [isChecked, setBoxChecked] = useState([]);
  const [steps, setSteps] = useState(2);

  const showModalForm = () => {
    setIsModalFormVisible(true);
  };

  const handleCancelForm = () => {
    setIsModalFormVisible(false);
  };

  const showModalProfile = () => {
    setIsModalProfileVisible(true);
  };

  const handleCancelProfile = () => {
    setIsModalProfileVisible(false);
  };

  const showModalPicture = () => {
    setIsModalPictureVisible(true);
  };

  const handleCancelPicture = () => {
    setIsModalPictureVisible(false);
  };

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onChangeChecked = (value) => {
    setBoxChecked(value);
    options.map((item, index) => {
      if (value.toString() === item) {
        setSteps(stepsModal[index + 1].numberOfSteps + 1);
      }
    });
  };

  const onClickSubmit = () => {
    setIsModalFormVisible(false);
    setBoxChecked([]);
    setCurrent(0);
    props.onClickSubmit(props.persona.id);
    message.success('Resposta salva com sucesso!');
  };

  useEffect(() => {
    if (current >= steps - 1) setNextHidden(true);
    else setNextHidden(false);
    if (current === steps - 1) setSubmitHidden(false);
    else setSubmitHidden(true);
    if (current > 0) setPreviousHidden(false);
    else setPreviousHidden(true);
  });

  const stepsModal = [
    {
      title: '1',
      content: (
        <IntroductionStep
          name={props.persona.name}
          options={options}
          onChange={onChangeChecked}
          isChecked={isChecked}
        />
      ),
    },
    {
      title: '2',
      content: <PositiveStep current={current} />,
      numberOfSteps: 2,
    },
    {
      title: '3',
      content: <NegativeStep current={current} userType={props.userType} />,
      numberOfSteps: 2,
    },
  ];

  return (
    <Fragment>
      <Row>
        <Col span={4}>
          <Space direction="vertical" size={5}>
            <Paragraph>Feedback Pendente</Paragraph>
            <Paragraph size="small">Convite aceito em</Paragraph>
            <Paragraph size="small">{acceptedDateFormated}</Paragraph>
          </Space>
        </Col>
        <Col span={15}>
          <Card type="inner" bordered={true}>
            <Row align="middle">
              <Col span={5} align="middle">
                <Image
                  src={props.persona.imageProfile}
                  alt="user"
                  onClick={showModalPicture}
                  layout="intrinsic"
                />
                <Button onClick={showModalProfile}>Ver perfil</Button>
              </Col>
              <Col span={18} push={1}>
                <Heading level={5} size="large">
                  <Space size={5}>
                    <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
                      <Image
                        src={linkedinIcon}
                        alt="logo"
                        objectFit="contain"
                        width="24"
                        height="24"
                      />
                    </a>
                    {`${props.persona.name} (${props.persona.pronoun})`}
                  </Space>
                </Heading>
                <Col span={20}>
                  <Divider plain />
                  <Paragraph size="small">{`Projeto: ${props.persona.project}`}</Paragraph>
                  <Paragraph size="small">{`Data do Convite: ${invitedDateFormated}`}</Paragraph>
                  <Space direction="vertical" size={10} style={{ width: '100%' }}>
                    <Paragraph size="small">{`Período para mentoria: ${acceptedDateFormated} a ${finalDateFormated}`}</Paragraph>
                    <Row justify="center">
                      <Button type="primary" onClick={showModalForm} icon={<EditFilled />}>
                        Preencher
                      </Button>
                    </Row>
                  </Space>
                </Col>
              </Col>
            </Row>
          </Card>
        </Col>
        <ModalFeedback
          isModalVisible={isModalFormVisible}
          handleCancel={handleCancelForm}
          stepsModal={stepsModal}
          current={current}
          nextHidden={nextHidden}
          previousHidden={previousHidden}
          submitHidden={submitHidden}
          isChecked={isChecked}
          onClickSubmit={onClickSubmit}
          next={next}
          prev={prev}
        />
        <ModalProfile
          persona={props.persona}
          isModalVisible={isModalProfileVisible}
          handleCancel={handleCancelProfile}
          userType={props.userType}
        />
        <ModalPicture
          persona={props.persona}
          isModalVisible={isModalPictureVisible}
          handleCancel={handleCancelPicture}
        />
      </Row>
    </Fragment>
  );
}

function ModalFeedback(props) {
  return (
    <Modal
      visible={props.isModalVisible}
      centered={true}
      onCancel={props.handleCancel}
      width={widthModal}
      footer={[
        <Button
          key="previous"
          onClick={() => props.prev()}
          style={{ display: props.previousHidden ? 'none' : '' }}
        >
          Anterior
        </Button>,
        <Button
          type="primary"
          key="confirm"
          onClick={() => props.next()}
          style={{ display: props.nextHidden ? 'none' : '' }}
          disabled={props.isChecked.length > 0 ? false : true}
        >
          Próximo
        </Button>,
        <Button
          type="primary"
          key="submit"
          onClick={props.onClickSubmit}
          style={{ display: props.submitHidden ? 'none' : '' }}
          href='/thanks-page'
        >
          Enviar
        </Button>,
      ]}
    >
      {props.current === 0
        ? props.stepsModal[props.current].content
        : props.isChecked.toString() === options[0]
        ? props.stepsModal[1].content
        : props.stepsModal[2].content}
    </Modal>
  );
}
