import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Col, Row, Card, Space, Modal, message } from 'antd';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import ModalProfile from '../shared/ModalProfile';
import ModalPicture from '../shared/ModalPicture';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

const { confirm } = Modal;

const widthProfile = 200;

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

  const showPromiseConfirm = () => {
    confirm({
      title: `Deseja confirmar a sua escolha com ${props.persona.name}?`,
      content: 'Lembre-se: você deverá escolher um único mentor.',
      onOk() {
        setModalVisible(false);
        props.onClick(props.persona.id);
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

  return (
    <Col span={7}>
      <Card bordered={true}>
        <Space direction="vertical" size={20}>
          <Space direction="vertical" size={10}>
            <Image
              src={props.persona.imageProfile}
              alt="mentor"
              onClick={showModalPicture}
              width={widthProfile}
              height={widthProfile}
            />
            <Row align="middle">
              <Space size={5}>
                <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
                  <Image src={linkedinIcon} alt="logo" objectFit="contain" width="24" height="24" />
                </a>
                <Paragraph size="large">{`${props.persona.name}, ${props.persona.age}`}</Paragraph>
              </Space>
            </Row>
            <Row align="middle" justify="center">
              <p>{`"${props.persona.description.slice(0, 75)}..."`}</p>
            </Row>
            <Paragraph size="small">{`Empresa: ${props.persona.company}`}</Paragraph>
          </Space>
          <Row justify="center">
            <Space size={5}>
              <Button onClick={showModal} align="middle">
                Ver perfil
              </Button>
              {!props.isMentorChoose && (
                <Button type="primary" onClick={showPromiseConfirm} align="middle">
                  Deu match!
                </Button>
              )}
            </Space>
          </Row>
        </Space>
      </Card>
      <ModalProfile
        persona={props.persona}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      >
        <Card>
          <Card.Grid style={{ width: '100%' }} hoverable={false}>
            <Paragraph strong> Informações Profissionais</Paragraph>
            <Paragraph size="small">{`Empresa: ${props.persona.company}`}</Paragraph>
            <Paragraph size="small">{`Cargo: ${props.persona.profession}`}</Paragraph>
          </Card.Grid>
          <Card.Grid style={{ width: '100%' }} hoverable={false}>
            <Paragraph strong> Informações Acadêmicas</Paragraph>
            <Paragraph size="small">{`Faculdade: ${props.persona.college}`}</Paragraph>
            <Paragraph size="small">{`Curso: ${props.persona.course}`}</Paragraph>
          </Card.Grid>
        </Card>
      </ModalProfile>
      <ModalPicture
        persona={props.persona}
        isModalVisible={isModalPictureVisible}
        handleCancel={handleCancelPicture}
      />
    </Col>
  );
}
