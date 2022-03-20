import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, message, Col, Row, Card, Modal, Space, Timeline, Divider } from 'antd';
import { DoubleRightOutlined, InfoCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { MenuModel } from '../../../components/MenuModel';
import { SocialMedia } from '../../../components/SocialMedia';
import ModalProfile from '../../shared/ModalProfile';
import ModalPicture from '../../shared/ModalPicture';

import IntroductionStep from './IntroductionStep';
import PositiveStep from './PositiveStep';
import NegativeStep from './NegativeStep';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

const mentoringPeriod = 15;

export default function Feedback({ personas }) {
  const [getDecisionList, setDecisionList] = useState(
    personas.filter(function (item) {
      return !item.isAnswered;
    }),
  );
  const [keyMenu, setKeyMenu] = useState('all');

  const onClickMenu = (event) => {
    setKeyMenu(event.key);
  };

  const menuItems = [
    {
      key: 'all',
      title: 'Feedbacks Pendentes',
      icon: <InfoCircleOutlined />,
    },
  ];

  const personaAnswered = (id) => {
    setDecisionList(
      getDecisionList
        .map((item) => {
          if (item.id === id) {
            item.isAnswered = true;
          }
          return item;
        })
        .filter(function (item) {
          return !item.isAnswered;
        }),
    );
  };

  return (
    <Fragment>
      <Space direction="vertical" size={30}>
        <MenuModel
          onClick={onClickMenu}
          selectedKeys={keyMenu}
          menuItems={menuItems}
          userType="mentor"
        />
        <Row>
          <Col push={1}>
            <Fragment>
              <Heading>Meus feedbacks a preencher:</Heading>
              <Timeline>
                {getDecisionList.map((item, index) => (
                  <Timeline.Item
                    key={`card-${index}`}
                    dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
                  >
                    <CardProfile
                      persona={item}
                      key={`card-${index}`}
                      onClickSubmit={personaAnswered}
                    />
                  </Timeline.Item>
                ))}
              </Timeline>
            </Fragment>
          </Col>
        </Row>
        <Row>
          <SocialMedia />
        </Row>
      </Space>
    </Fragment>
  );
}

function CardProfile(props) {
  const invitedDate = new Date(props.persona.invitedDate);
  const acceptedDate = new Date(props.persona.acceptedDate);
  const finalDate = new Date(props.persona.acceptedDate);
  finalDate.setDate(finalDate.getDate() + mentoringPeriod);

  const invitedDateFormated = `${invitedDate.getDate()}-${invitedDate.getMonth()}-${invitedDate.getFullYear()}`;
  const acceptedDateFormated = `${acceptedDate.getDate()}-${acceptedDate.getMonth()}-${acceptedDate.getFullYear()}`;
  const finalDateFormated = `${finalDate.getDate()}-${finalDate.getMonth()}-${finalDate.getFullYear()}`;

  const options = ['Sim', 'Não'];

  const [isModalPositiveVisible, setIsModalPositiveVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [nextHidden, setNextHidden] = useState(false);
  const [previousHidden, setPreviousHidden] = useState(true);
  const [submitHidden, setSubmitHidden] = useState(true);
  const [isChecked, setBoxChecked] = useState([]);
  const [steps, setSteps] = useState(2);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalPictureVisible, setModalPictureVisible] = useState(false);

  const showModalPositive = () => {
    setIsModalPositiveVisible(true);
  };

  const handleCancelPositive = () => {
    setIsModalPositiveVisible(false);
  };

  const showModalPicture = () => {
    setModalPictureVisible(true);
  };

  const handleCancelPicture = () => {
    setModalPictureVisible(false);
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
    setIsModalVisible(false);
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

  const widthModal = 800;

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

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
      content: <NegativeStep current={current} />,
      numberOfSteps: 2,
    },
  ];

  return (
    <Fragment>
      <Row>
        <Col span={4}>
          <Space direction="vertical" size={5}>
            <Paragraph>Presença Pendente</Paragraph>
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
                <Button onClick={showModal}>Ver perfil</Button>
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
                      <Button type="primary">
                        Preencher lista de presença
                      </Button>
                    </Row>
                  </Space>
                </Col>
              </Col>
            </Row>
          </Card>
        </Col>
        <ModalProfile
          persona={props.persona}
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          userType="mentor"
        />
      </Row>
    </Fragment>
  );
}
