import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, message, Col, Row, Card, Modal, Timeline, Menu, Space, Collapse } from 'antd';
import {
  UnorderedListOutlined,
  HeartOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import personas from '../../shared/MockSeed';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

const { confirm } = Modal;

const daysLimit = 100;


export default function Mentor({}) {
  const personaList = personas.map((item) => ({
    ...item,
    isExperired: setExpiredDate(item.invitedDate),
  }));

  const [getDecisionList, setDecisionList] = useState(
    personaList.filter(function (item) {
      return !item.isExperired;
    }),
  );

  const studentConfirmed = (id) => {
    setDecisionList(
      getDecisionList.map((item) => {
        if (item.id === id) {
          item.isConfirmed = true;
          item.acceptedDate = new Date();
        }
        return item;
      }),
    );
  };

  const studentRejected = (id) => {
    setDecisionList(
      getDecisionList.map((item) => {
        if (item.id === id) {
          item.isRejected = true;
          item.rejectedDate = new Date();
        }
        return item;
      }),
    );
  };

  const isDisabledMenu = () => {
    const confirmedListSize = getDecisionList.filter(function (item) {
      return item.isConfirmed;
    }).length;
    return confirmedListSize === 0 ? true : false;
  };

  const [keyMenu, setKeyMenu] = useState('all');
  const [disableAcceptedMenu, setAcceptedMenu] = useState(isDisabledMenu());

  const onClickMenu = (event) => {
    setKeyMenu(event.key);
  };

  useEffect(() => {
    setAcceptedMenu(isDisabledMenu());
  });

  return (
    <Fragment>
      <Space direction="vertical" size={30}>
        <Menu onClick={onClickMenu} selectedKeys={keyMenu} mode="horizontal">
          <Menu.Item key="all" icon={<UnorderedListOutlined />}>
            Todas os Convites
          </Menu.Item>
          <Menu.Item key="accepted" disabled={disableAcceptedMenu} icon={<HeartOutlined />}>
            Convites Aceitos
          </Menu.Item>
        </Menu>
        <Row>
          <Col push={1}>
            {keyMenu == 'all' ? (
              <div>
                <Heading>Meus convites para mentorar:</Heading>
                <Timeline>
                  {getDecisionList
                    .filter(function (item) {
                      return !item.isConfirmed & !item.isRejected;
                    })
                    .map((item, index) => (
                      <Timeline.Item key={`card-${index}`}>
                        <CardProfile
                          persona={item}
                          onClickConfirm={studentConfirmed}
                          onClickReject={studentRejected}
                        />
                      </Timeline.Item>
                    ))}
                </Timeline>
              </div>
            ) : (
              <div>
                <Heading>Meus mentorados:</Heading>
                <Timeline>
                  {getDecisionList
                    .filter(function (item) {
                      return item.isConfirmed;
                    })
                    .map((item, index) => (
                      <Timeline.Item key={`card-${index}`}>
                        <CardContact
                          persona={item}
                          onClickConfirm={studentConfirmed}
                          onClickReject={studentRejected}
                        />
                      </Timeline.Item>
                    ))}
                </Timeline>
              </div>
            )}
          </Col>
        </Row>
      </Space>
    </Fragment>
  );
}

function CardContact(props) {
  const invitedDate = new Date(props.persona.acceptedDate);
  const invitedDateFormated = `${invitedDate.getDate()}-${
    invitedDate.getMonth() + 1
  }-${invitedDate.getFullYear()}`;
  const apiWpp = 'https://api.whatsapp.com/send?phone=';
  const subjectEmail = 'Programa de Mentoria Social | Instituto Semear';

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Row>
      <Col span={4}>
        <Paragraph>{`Convite foi aceito em ${invitedDateFormated}`}</Paragraph>
      </Col>
      <Col span={15} justify="center">
        <Card type="inner" bordered={true}>
          <Row align="middle">
            <Col span={5} align="middle">
              <Image
                src={props.persona.imageProfile}
                alt="user"
                onClick={showModal}
                layout="intrinsic"
              />
              <Button onClick={showModal}>Ver perfil</Button>
            </Col>
            <Col span={18} push={1}>
              <Space direction="vertical" size={10}>
                <Heading level={5} size="large">
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
                </Heading>
                <Row gutter={24}>
                  <Col align="middle" span={11}>
                    <Card bordered={false}>
                      <Card.Grid style={{ width: '100%' }} hoverable={false}>
                        <Paragraph strong size="small">
                          Informações de Contato
                        </Paragraph>
                        <Paragraph size="small">
                          <Space size={5}>
                            <WhatsAppOutlined />
                            <a
                              href={`${apiWpp}${'5511982778267'}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Enviar mensagem
                            </a>
                          </Space>
                        </Paragraph>
                        <Paragraph size="small">
                          <Space size={5}>
                            <MailOutlined />
                            <a
                              href={`mailto:${props.persona.email}?Subject=${subjectEmail}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Enviar e-mail
                            </a>
                          </Space>
                        </Paragraph>
                      </Card.Grid>
                    </Card>
                  </Col>
                  <Col align="middle" span={11}>
                    <Card bordered={false}>
                      <Card.Grid style={{ width: '100%' }} hoverable={false}>
                        <Paragraph strong size="small">
                          Informações da Mentoria
                        </Paragraph>
                        <Paragraph size="small">
                          <Space size={5}>
                            <WhatsAppOutlined />
                            <a
                              href={`${apiWpp}${'5511982778267'}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Enviar mensagem
                            </a>
                          </Space>
                        </Paragraph>
                        <Paragraph size="small">
                          <Space size={5}>
                            <MailOutlined />
                            <a
                              href={`mailto:${props.persona.email}?Subject=${subjectEmail}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Enviar e-mail
                            </a>
                          </Space>
                        </Paragraph>
                      </Card.Grid>
                    </Card>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
      <ModalProfile
        persona={props.persona}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
    </Row>
  );
}

function CardProfile(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showPromiseConfirm = () => {
    confirm({
      title: `Deseja confirmar a sua escolha com ${props.persona.name}?`,
      content:
        'Lembre-se: você está confirmando seu interesse em realizar uma mentoria com esse jovem, e garantindo que realizará a mentoria dentro do período de 1 mês',
      onOk() {
        props.onClickConfirm(props.persona.id);
        message.success('Escolha realizada com sucesso!');
        return new Promise((resolve) => {
          setTimeout(resolve, 800);
        });
      },
      onCancel() {},
      okText: 'Confirmar',
      cancelText: 'Voltar',
    });
  };

  const showPromiseNegative = () => {
    confirm({
      title: `Deseja confirmar exclusão da solicitação enviada por ${props.persona.name}?`,
      content: 'Lembre-se: A recusa do convite é irreversível',
      onOk() {
        props.onClickReject(props.persona.id);
        message.success('Exclusão realizada com sucesso!');
        return new Promise((resolve) => {
          setTimeout(resolve, 800);
        });
      },
      onCancel() {},
      okText: 'Confirmar',
      cancelText: 'Voltar',
    });
  };

  const invitedDate = new Date(props.persona.invitedDate);
  const invitedDateFormated = `${invitedDate.getDate()}-${invitedDate.getMonth()}-${invitedDate.getFullYear()}`;

  const [diffHours, diffDays] = getInvitedDate(props.persona.invitedDate);
  const hoursMissing = 24 - diffHours;
  const daysMissing = daysLimit - diffDays;

  return (
    <Row>
      <Col span={4}>
        <Paragraph>{`Matching Realizado em ${invitedDateFormated}`}</Paragraph>
        <Paragraph size="small">
          {daysMissing > 0
            ? `Convite expira em ${daysMissing} dia(s)`
            : `Convite expira em ${hoursMissing} hora(s)`}
        </Paragraph>
      </Col>
      <Col span={15}>
        <Card type="inner" bordered={true}>
          <Row align="middle">
            <Col span={5} align="middle">
              <Image
                src={props.persona.imageProfile}
                alt="user"
                onClick={showModal}
                layout="intrinsic"
              />
              <Button onClick={showModal}>Ver perfil</Button>
            </Col>
            <Col span={18} push={1}>
              <Space direction="vertical" size={10}>
                <Heading level={5} size="large">
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
                </Heading>
                <Paragraph size="small">{`${props.persona.description}`}</Paragraph>
                <Col align="middle">
                  <Space size={5}>
                    <Button key="reject" onClick={showPromiseNegative}>
                      Excluir Solicitação
                    </Button>
                    <Button type="primary" key="confirm" onClick={showPromiseConfirm}>
                      Aceitar Solicitação
                    </Button>
                  </Space>
                </Col>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
      <ModalProfile
        persona={props.persona}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
    </Row>
  );
}

function ModalProfile(props) {
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
      <Row align="middle" justify="center">
        <Col span={10}>
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
    </Modal>
  );
}

function getInvitedDate(invitedDate) {
  const todayDate = new Date();
  const diffTime = Math.abs(invitedDate - todayDate);
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60)) % 24;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return [diffHours, diffDays];
}

function setExpiredDate(date, experiredDays = daysLimit) {
  const [diffHours, diffDays] = getInvitedDate(date);
  if (experiredDays - diffDays < 0) return true;
  else return false;
}
