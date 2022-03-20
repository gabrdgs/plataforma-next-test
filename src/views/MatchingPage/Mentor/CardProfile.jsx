import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Col, Row, Card, Space, Modal, message } from 'antd';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import ModalProfile from '../../shared/ModalProfile';
import ModalPicture from '../../shared/ModalPicture';

import { getDifferenceBetweenDates, setTimeFormat } from '../../shared/utils';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

const { confirm } = Modal;

export default function CardProfile(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalPictureVisible, setModalPictureVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const showModalPicture = () => {
    setModalPictureVisible(true);
  };

  const handleCancelPicture = () => {
    setModalPictureVisible(false);
  };

  const showConfirm = () => {
    confirm({
      title: `Deseja confirmar a sua escolha com ${props.persona.name}?`,
      content: 'Lembre-se: você deverá realizar a mentoria dentro do período de 1 mês',
      onOk() {
        props.onClickConfirm(props.persona.id);
        message.success('Convite aceito com sucesso!');
        return new Promise((resolve) => {
          setTimeout(resolve, 800);
        });
      },
      onCancel() {},
      okText: 'Confirmar',
      cancelText: 'Voltar',
    });
  };

  const showNegative = () => {
    confirm({
      title: `Deseja excluir a solicitação enviada por ${props.persona.name}?`,
      content: 'Lembre-se: esta ação é irreversível',
      onOk() {
        props.onClickReject(props.persona.id);
        message.success('Solicitação excluída com sucesso!');
        return new Promise((resolve) => {
          setTimeout(resolve, 800);
        });
      },
      onCancel() {},
      okText: 'Excluir',
      okType: 'danger',
      cancelText: 'Voltar',
    });
  };

  const invitedDate = new Date(props.persona.invitedDate);
  const invitedDateFormated = `${setTimeFormat(invitedDate)}-${setTimeFormat(
    invitedDate,
    'month',
  )}-${invitedDate.getFullYear()}`;
  const [diffHours, diffDays] = getDifferenceBetweenDates(props.persona.invitedDate);
  const hoursMissing = 24 - diffHours;
  const daysMissing = props.daysLimit - diffDays;

  return (
    <Row>
      <Col span={4}>
        <Space direction="vertical" size={5}>
          <Paragraph>
            {daysMissing > 0
              ? `Expira em ${daysMissing} dia(s)`
              : `Expira em ${hoursMissing} hora(s)`}
          </Paragraph>
          <Paragraph size="small">{'Matching realizado em'}</Paragraph>
        </Space>
        <Paragraph size="small">{invitedDateFormated}</Paragraph>
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
              <Space direction="vertical" size={10}>
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
                <Paragraph size="small">{`${props.persona.description}`}</Paragraph>
                <Col align="middle">
                  <Space size={5}>
                    <Button key="reject" onClick={showNegative}>
                      Excluir Solicitação
                    </Button>
                    <Button type="primary" key="confirm" onClick={showConfirm}>
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
        userType="mentor"/>
      <ModalPicture
        persona={props.persona}
        isModalVisible={isModalPictureVisible}
        handleCancel={handleCancelPicture}
      />
    </Row>
  );
}
