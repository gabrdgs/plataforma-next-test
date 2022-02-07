import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Button, message, Col, Row, Card, Modal, Popover, Space, Carousel } from 'antd';
import {
  DoubleRightOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import personas from '../../shared/MockMentor'

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

const { confirm } = Modal;


export default function Seed({}) {
  const personaList = personas.map((item) => ({ ...item, isSelected: false }));

  const [isConfirmClicked, setConfirmClicked] = useState(personaList);
  const [disabledMatch, setDisabledMatch] = useState(false);

  const mentorSelected = (id) => {
    setConfirmClicked(
      personaList
        .map((item) => {
          if (item.id === id) {
            item.isSelected = true;
          }
          return item;
        })
        .filter(function (item) {
          return item.isSelected;
        }),
    );
    setDisabledMatch(true);
  };

  return (
    <Fragment>
      <div>
        {isConfirmClicked.length === 1 ? (
          <Heading level={4} style={{ margin: '10px 0 10px 80px' }}>
            Estamos preparando tudo para a sua mentoria e em breve entraremos em contato!
          </Heading>
        ) : (
          <Heading>
            <Space>
              {`Esses são os seus três melhores matches!`}
              <Popover
                content="Conheça-os e escolha um para realizar a mentoria"
                trigger="click"
                overlayStyle={{
                  width: '25vw',
                }}
              >
                <InfoCircleOutlined />
              </Popover>
            </Space>
          </Heading>
        )}
        <Row gutter={50} justify="center">
          {isConfirmClicked.map((item, index) => (
            <CardProfile
              persona={item}
              key={`card-${index}`}
              onClick={mentorSelected}
              isMatchClicked={isConfirmClicked}
              disabledMatch={disabledMatch}
            />
          ))}
        </Row>
      </div>
    </Fragment>
  );
}

function CardProfile(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const widthProfile = 200;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showPromiseConfirm = () => {
    confirm({
      title: `Deseja confirmar a sua escolha com ${props.persona.name}?`,
      content: 'Lembre-se: você não poderá voltar atrás na sua decisão',
      onOk() {
        setIsModalVisible(false);
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
    <Col span={8}>
      <Card hoverable bordered={true}>
        <Space direction="vertical" size={10}>
          <Image
            src={props.persona.imageProfile}
            alt="mentor"
            width={widthProfile}
            height={widthProfile}
          />
          <Row align="middle">
            <Space>
              <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
                <Image src={linkedinIcon} alt="logo" objectFit="contain" width="24" height="24" />
              </a>
              <Paragraph size="large">{`${props.persona.name}, ${props.persona.age}`}</Paragraph>
            </Space>
          </Row>
          <Row align="middle" justify="center">
            <p>{`"${props.persona.description.slice(0, 85)}..."`}</p>
          </Row>
          <Paragraph>{`Empresa: ${props.persona.company}`}</Paragraph>
        </Space>
        <Button
          type="primary"
          size="large"
          onClick={showModal}
          icon={<DoubleRightOutlined />}
          align="middle"
          style={{ marginTop: '20px' }}
        >
          Deu Match!
        </Button>
      </Card>
      <Modal
        visible={isModalVisible}
        centered={true}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel} style={{ marginTop: '10px' }}>
            Voltar
          </Button>,
          <Button
            type="primary"
            key="confirm"
            onClick={showPromiseConfirm}
            disabled={props.disabledMatch}
          >
            Deu Match!
          </Button>,
        ]}
      >
        <Image
          src={props.persona.imageProfile}
          alt="mentor"
          width={widthProfile}
          height={widthProfile}
        />
        <div style={{ fontSize: '22px', margin: '20px 0' }}>
          <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
            <Image src={linkedinIcon} alt="logo" objectFit="contain" width="24" height="24" />
          </a>
          {`${props.persona.name} (${props.persona.pronoun}), ${props.persona.age}`}
        </div>
        <Row>
          <Paragraph size="small">{props.persona.description}</Paragraph>
        </Row>
        <Card>
          <Row>
            <Card.Grid style={{ width: '100%' }}>
              <Row>
                <Paragraph size="small" strong>
                  Informações Profissionais
                </Paragraph>
              </Row>
              <Row>
                <Paragraph size="small">{`Empresa: ${props.persona.company}`}</Paragraph>
              </Row>
              <Row>
                <Paragraph size="small">{`Cargo: ${props.persona.profession}`}</Paragraph>
              </Row>
            </Card.Grid>
          </Row>
          <Row>
            <Card.Grid style={{ width: '100%' }}>
              <Row>
                <Paragraph size="small" strong>
                  Informações Acadêmicas
                </Paragraph>
              </Row>
              <Row>
                <Paragraph size="small">{`Faculdade: ${props.persona.college}`}</Paragraph>
              </Row>
              <Row>
                <Paragraph size="small">{`Curso: ${props.persona.course}`}</Paragraph>
              </Row>
            </Card.Grid>
          </Row>
        </Card>
      </Modal>
    </Col>
  );
}
