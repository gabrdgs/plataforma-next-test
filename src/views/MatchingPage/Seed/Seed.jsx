import React, { Fragment, useState } from 'react';
import { Col, Row, Modal,Space } from 'antd';
import { HourglassOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { MenuModel } from '../../../components/MenuModel';
import CardProfile from './CardProfile';

import personas from '../../shared/MockMentor';

export default function Seed({}) {
  const personaList = personas.map((item) => ({ ...item, isSelected: false }));

  const [mentorsList, setMentorsList] = useState(personaList);
  const [disabledMatch, setDisabledMatch] = useState(false);

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
    setDisabledMatch(true);
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
            {mentorsList.length === 1 ? (
              <Heading>Em breve notificaremos você!</Heading>
            ) : (
              <Heading>Esses são os seus três melhores matches!</Heading>
            )}
          </Col>
        </Row>
        <Row justify="space-around" align="middle" gutter={32}>
          {mentorsList.map((item, index) => (
            <CardProfile
              persona={item}
              key={`card-${index}`}
              onClick={mentorSelected}
              isMatchClicked={mentorsList}
              disabledMatch={disabledMatch}
              isMentorChoose={mentorsList.length === 1 ? true : false}
            />
          ))}
        </Row>
      </Space>
    </Fragment>
  );
}


