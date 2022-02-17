import React, { Fragment, useState, useEffect } from 'react';
import { Col, Row, Timeline, Space } from 'antd';
import {
  UnorderedListOutlined,
  HeartOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { SocialMedia } from '../../../components/SocialMedia';
import { MenuModel } from '../../../components/MenuModel';
import CardContact from '../shared/CardContact';
import CardProfile from './CardProfile';

import { getDifferenceBetweenDates } from '../../shared/utils';

import personas from '../../shared/MockSeed';

const daysLimit = 100;

const statusObject = {
  done: { color: 'green', status: 'Concluído' },
  waiting: { color: 'orange', status: 'A realizar' },
  incomplete: { color: 'red', status: 'Não concluído' },
  cancelled: { color: 'gray', status: 'Não realizado' },
};

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
          item.finalDate = new Date();
          new Date(item.finalDate.setMonth(item.finalDate.getMonth() + 1));
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

  const menuItems = [
    {
      key: 'all',
      title: 'Todos os convites',
      icon: <UnorderedListOutlined />,
    },
    {
      key: 'accepted',
      title: 'Meus matches',
      icon: <HeartOutlined />,
      disabled: disableAcceptedMenu,
    },
  ];

  return (
    <Fragment>
      <Space direction="vertical" size={30}>
        <MenuModel
          onClick={onClickMenu}
          selectedKeys={keyMenu}
          menuItems={menuItems}
          userType="mentor"
        />
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
                      <Timeline.Item
                        key={`card-${index}`}
                        dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
                      >
                        <CardProfile
                          persona={item}
                          daysLimit={daysLimit}
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
                      <Timeline.Item
                        color={
                          setStatusMentoring(
                            item.isFeedbackAnswered,
                            item.mentoringHappened,
                            item.finalDate,
                          ).color
                        }
                        key={`card-${index}`}
                      >
                        <CardContact
                          persona={item}
                          user="mentor"
                          statusMentoring={setStatusMentoring(
                            item.isFeedbackAnswered,
                            item.mentoringHappened,
                            item.finalDate,
                          )}
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
        <Row>
          <SocialMedia />
        </Row>
      </Space>
    </Fragment>
  );
}

function setExpiredDate(date, experiredDays = daysLimit) {
  const [diffHours, diffDays] = getDifferenceBetweenDates(date);
  if (experiredDays - diffDays < 0) return true;
  else return false;
}

function setStatusMentoring(isFeedbackAnswered, mentoringHappened, finalDate) {
  const todayDate = new Date();
  const diffTime = finalDate - todayDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);
  return statusObject[
    mentoringHappened
      ? 'done'
      : isFeedbackAnswered
      ? 'cancelled'
      : diffDays > 0
      ? 'waiting'
      : 'incomplete'
  ];
}
