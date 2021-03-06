import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Row, Card, Space, Divider, Tooltip } from 'antd';
import { WhatsAppOutlined, MailOutlined, QuestionCircleFilled, EditFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import ModalProfile from '../../shared/ModalProfile';
import ModalPicture from '../../shared/ModalPicture';
import { setTimeFormat } from '../../shared/utils';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

export default function CardContact(props) {
  const acceptedDate = new Date(props.persona.acceptedDate);
  const finalDate = new Date(props.persona.finalDate);
  const acceptedDateFormated = `${setTimeFormat(acceptedDate)}-${setTimeFormat(
    acceptedDate,
    'month',
  )}-${acceptedDate.getFullYear()}`;
  const finalDateFormated = `${setTimeFormat(finalDate)}-${setTimeFormat(
    finalDate,
    'month',
  )}-${finalDate.getFullYear()}`;

  const statusName = props.statusMentoring.status;
  const statusColor = props.statusMentoring.color;
  const statusTooltip = props.statusMentoring.tooltip;

  const apiWpp = 'https://api.whatsapp.com/send?phone=';
  const subjectEmail = 'Programa de Mentoria Social | Instituto Semear';

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

  return (
    <Row>
      <Col span={4}>
        <Space direction="vertical" size={5}>
          <Paragraph color={statusColor}>
            <Space size={5}>
              {statusName}
              <Tooltip title={statusTooltip}>
                <QuestionCircleFilled />
              </Tooltip>
            </Space>
          </Paragraph>
          <Paragraph size="small">Per??odo para mentoria:</Paragraph>
        </Space>
        <Space direction="vertical" size={30}>
          <Paragraph size="small">{`${acceptedDateFormated} a ${finalDateFormated}`}</Paragraph>
          {statusColor == 'red' ? (
            <Link href={`/feedback-${props.user}`}>
              <Button danger type="primary">
                Lista de Presen??a
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </Space>
      </Col>
      <Col span={15} justify="center">
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
                <Paragraph size="small">
                  <Space size={5}>
                    <WhatsAppOutlined />
                    <a href={`${apiWpp}${props.persona.whatsapp}`} target="_blank" rel="noreferrer">
                      Enviar mensagem
                    </a>
                  </Space>
                </Paragraph>
                <Space direction="vertical" size={30} style={{ width: "100%"}}>
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
                  <Row justify="center">
                    <Button type="primary" href="/feedback-mentor" icon={<EditFilled />}>
                      Preencher feedback
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
      <ModalPicture
        persona={props.persona}
        isModalVisible={isModalPictureVisible}
        handleCancel={handleCancelPicture}
      />
    </Row>
  );
}
