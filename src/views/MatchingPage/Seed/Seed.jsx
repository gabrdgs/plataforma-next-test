import React, { Fragment, useState } from 'react';
import { Col, Row, Timeline, Space } from 'antd';
import { HourglassOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { MenuModel } from '../../../components/MenuModel';
import CardProfile from './CardProfile';

import personas from '../../shared/MockMentor';

export default function Seed({}) {
  const personaList = personas.map((item) => ({ ...item, isSelected: false }));

  const [mentorsList, setMentorsList] = useState(personaList);
  const [isMentorChose, setIsMentorChose] = useState(false);

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
            <Timeline pending="Aguardando mentor">
              <Timeline.Item>Convite enviado</Timeline.Item>
            </Timeline>
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

function progressSteps (done) {
 if (done) {
   console.log('0');
  setTimeout(2000);
  console.log('2');
}
return 1;
}


