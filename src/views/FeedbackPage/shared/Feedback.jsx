import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Col, Row, Space, Timeline } from 'antd';
import { DoubleRightOutlined, InfoCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Heading } from '../../../components/Heading';
import { MenuModel } from '../../../components/MenuModel';
import { SocialMedia } from '../../../components/SocialMedia';
import CardProfile from './CardProfile';


export default function Feedback({ personas, userType }) {
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
          userType={userType}
        />
        <Row>
          <Col push={1}>
            <Fragment>
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
                      userType={userType}
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


