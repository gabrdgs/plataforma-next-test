import React, { Fragment, useState, useEffect } from 'react';
import { Col, Row, Timeline, Space } from 'antd';
import { HourglassOutlined } from '@ant-design/icons';
import { Heading } from '../../../components/Heading';
import { MenuModel } from '../../../components/MenuModel';
import CardProfile from './CardProfile';

import personas from '../../shared/MockMentor';

export default function Seed({}) {
  const personaList = personas.map((item) => ({ ...item, isSelected: false }));
  const progressStepsList = [
    {
      pending: 'Enviando convite',
    },
    {
      pending: 'Aguardando resposta do mentor',
      accepted: 'Convite enviado',
    },
    {
      pending: 'Agendando a mentoria',
      accepted: 'Convite aceito',
    },
    {
      pending: 'Preencha a lista de presença',
      accepted: 'Mentoria agendada',
    },
  ];

  const [mentorsList, setMentorsList] = useState(personaList);
  const [isMentorChose, setIsMentorChose] = useState(false);
  const [stepsList, setStepsList] = useState([progressStepsList[0]]);
  const [count, setCount] = useState(0);

  const mentorSelected = (id) => {
    setMentorsList(
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
    setIsMentorChose(true);
  };

  useEffect(() => {
    if (isMentorChose && count <= progressStepsList.length - 2) {
      const timer = setTimeout(() => {
        setCount(count + 1);
        setStepsList([...stepsList, progressStepsList[count + 1]]);
      }, (count + 1) * 1000 * 1.5);
      return () => clearTimeout(timer);
    }
  });

  const menuItems = [
    {
      key: 'mentors',
      title: 'Acompanhamento da Mentoria',
      icon: <HourglassOutlined />,
    },
  ];

  return (
    <Fragment>
      <Space direction="vertical" size={20} style={{ width: '100%' }}>
        <MenuModel menuItems={menuItems} />
        <Row>
          <Col push={1}>
            {isMentorChose ? (
              <Heading level={3}>Acompanhe abaixo o progresso da mentoria:</Heading>
            ) : (
              <Heading level={3}>Esses são os seus três melhores matches!</Heading>
            )}
          </Col>
        </Row>
        {isMentorChose ? (
          <Row gutter={32} justify="center">
            <Timeline pending={stepsList[stepsList.length - 1].pending} mode="right">
              {stepsList.map(
                (item, index) =>
                  item.accepted && (
                    <Timeline.Item key={`timeline-item-${index}`}>{item.accepted}</Timeline.Item>
                  ),
              )}
            </Timeline>
            {mentorsList.map((item, index) => (
              <CardProfile
                persona={item}
                key={`card-${index}`}
                onClick={mentorSelected}
                isMatchClicked={mentorsList}
                isMentorChose={isMentorChose}
                isFeedbackReady={count === 3}
              />
            ))}
          </Row>
        ) : (
          <Row align="middle" gutter={32} justify="space-around">
            {mentorsList.map((item, index) => (
              <CardProfile
                persona={item}
                key={`card-${index}`}
                onClick={mentorSelected}
                isMatchClicked={mentorsList}
                isMentorChose={isMentorChose}
              />
            ))}
          </Row>
        )}
      </Space>
    </Fragment>
  );
}
