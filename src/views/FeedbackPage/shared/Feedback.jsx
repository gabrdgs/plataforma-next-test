import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, message, Col, Row, Card, Modal, Popover, Steps } from 'antd';
import { DoubleRightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import IntroductionStep from './IntroductionStep';
import PositiveStep from './PositiveStep';
import NegativeStep from './NegativeStep';

import linkedinIcon from '../../../assets/images/brands/linkedin.png';

const { Step } = Steps;

const mentoringPeriod = 15;

export default function Feedback({ personas }) {
  const [getDecisionList, setDecisionList] = useState(
    personas.filter(function (item) {
      return !item.isAnswered;
    }),
  );

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
      <div>
        <h4 align="center">
          Abaixo encontram-se as mentorias realizadas e que não foram contabilizadas!
          <Popover
            className="mx-3"
            content="Responda o Feedback e nos ajude a ser o melhor e mais amado Programa de Mentoria Social do Brasil"
            overlayStyle={{
              width: '25vw',
            }}
          >
            <InfoCircleOutlined />
          </Popover>
        </h4>
        {getDecisionList.map((item, index) => (
          <CardMentoring persona={item} key={`card-${index}`} onClickSubmit={personaAnswered} />
        ))}
      </div>
    </Fragment>
  );
}

function CardMentoring(props) {
  const invitedDate = new Date(props.persona.invitedDate);
  const acceptedDate = new Date(props.persona.acceptedDate);
  const finalDate = new Date(props.persona.acceptedDate);
  finalDate.setDate(finalDate.getDate() + mentoringPeriod);

  const invitedDateFormated = `${invitedDate.getDate()}-${invitedDate.getMonth()}-${invitedDate.getFullYear()}`;
  const acceptedDateFormated = `${acceptedDate.getDate()}-${acceptedDate.getMonth()}-${acceptedDate.getFullYear()}`;
  const finalDateFormated = `${finalDate.getDate()}-${finalDate.getMonth()}-${finalDate.getFullYear()}`;

  const options = ['Sim', 'Não'];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [nextHidden, setNextHidden] = useState(false);
  const [previousHidden, setPreviousHidden] = useState(true);
  const [submitHidden, setSubmitHidden] = useState(true);
  const [isChecked, setBoxChecked] = useState([]);
  const [steps, setSteps] = useState(2);

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
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
    <Row>
      <Col span={4} style={{ margin: '10px 0 10px 50px' }}>
        <Steps progressDot current={2} direction="vertical">
          <Step
            title="Feedback Pendente"
            description={`Convite aceito em ${acceptedDateFormated}`}
            style={{ margin: '20px 0px 80px 0px' }}
          />
        </Steps>
      </Col>
      <Col span={18} justify="center">
        <Card hoverable type="inner" bordered={true}>
          <Row>
            <Col style={{ margin: '10px 20px 10px 10px' }} span={4}>
              <Image src={props.persona.imageProfile} alt="mentor" width={200} height={200} />
            </Col>
            <Col span={18}>
              <div style={{ fontSize: '20px', margin: '10px 0' }}>
                <a href={props.persona.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image src={linkedinIcon} alt="logo" objectFit="contain" width="20" height="20" />
                </a>
                {`${props.persona.name} (${props.persona.pronoun})`}
              </div>
              <Card bordered={false}>
                <Card.Grid style={{ width: '100%' }} hoverable={false}>
                  <h6> Informações da Mentoria</h6>
                  <a>{`Projeto: ${props.persona.project}`}</a>
                  <br />
                  <a>{`Data do Convite: ${invitedDateFormated}`}</a>
                  <br />
                  <a>{`Período para Realização da Mentoria: ${acceptedDateFormated} a ${finalDateFormated}`}</a>
                  <br />
                  <Button
                    type="primary"
                    size="small"
                    onClick={showModal}
                    icon={<DoubleRightOutlined />}
                    align="middle"
                    style={{ marginTop: '20px', alignSelf: 'end' }}
                  >
                    Responder ao Feedback
                  </Button>
                </Card.Grid>
              </Card>
            </Col>
          </Row>
        </Card>
        <Modal
          visible={isModalVisible}
          centered={true}
          onCancel={handleCancel}
          width={widthModal}
          footer={[
            <Button
              key="previous"
              onClick={() => prev()}
              style={{ display: previousHidden ? 'none' : '' }}
            >
              Anterior
            </Button>,
            <Button
              type="primary"
              key="confirm"
              onClick={() => next()}
              style={{ display: nextHidden ? 'none' : '' }}
              disabled={isChecked.length > 0 ? false : true}
            >
              Próximo
            </Button>,
            <Button
              type="primary"
              key="submit"
              onClick={onClickSubmit}
              style={{ display: submitHidden ? 'none' : '' }}
            >
              Enviar
            </Button>,
          ]}
        >
          {current === 0
            ? stepsModal[current].content
            : isChecked.toString() === options[0]
            ? stepsModal[1].content
            : stepsModal[2].content}
        </Modal>
      </Col>
    </Row>
  );
}
