import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { Col, Row, Timeline, Space } from 'antd';
import { UnorderedListOutlined, HeartOutlined, ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { SocialMedia } from '../../../components/SocialMedia';
import { MenuModel } from '../../../components/MenuModel';
import CardContact from '../shared/CardContact';
import CardProfile from './CardProfile';

import { getDifferenceBetweenDates } from '../../shared/utils';
import personas from '../../shared/MockSeed';

import sittingMan from '../../../assets/images/characters/sitting-man.jpeg';
import notebook from '../../../assets/images/objects/notebook.jpeg';

const daysLimit = 150;

const statusObject = {
  done: { color: 'green', status: 'Finalizado' },
  waiting: { color: 'orange', status: 'A realizar' },
  incomplete: { color: 'red', status: 'Não finalizado' },
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

  const allList = getDecisionList.filter(function (item) {
    return !item.isConfirmed & !item.isRejected;
  });

  const acceptedList = getDecisionList.filter(function (item) {
    return item.isConfirmed;
  });

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

  const setAllList = () => {
    return allList;
  };

  const setAcceptedList = () => {
    return acceptedList;
  };

  const [keyMenu, setKeyMenu] = useState('all');

  const onClickMenu = (event) => {
    setKeyMenu(event.key);
  };

  useEffect(() => {
    setAllList();
    setAcceptedList();
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
                {allList.length == 0 ? (
                  <Fragment>
                    <Row align="middle" justify="center">
                      <Col span={8}>
                        <Heading level={1}>Oops!</Heading>
                        <Heading level={3} color="tertiary">
                          Parece que você não tem novos convites 😢
                        </Heading>
                        <Paragraph size="large">Mas fique tranquilo(a)!</Paragraph>
                        <Paragraph size="large">
                          Assim que tivermos atualizações, você será notificado via e-mail e
                          plataforma 🚀
                        </Paragraph>
                      </Col>
                      <Col span={8}>
                        <Image src={sittingMan} />
                      </Col>
                    </Row>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Heading>Meus convites para mentorar:</Heading>
                    <Timeline>
                      {allList.map((item, index) => (
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
                  </Fragment>
                )}
              </div>
            ) : (
              <div>
                {acceptedList.length == 0 ? (
                  <Fragment>
                    <Row align="middle" justify="center">
                      <Col span={10}>
                        <Heading level={1}>Oops!</Heading>
                        <Heading level={3} color="tertiary">
                          Parece que você ainda não realizou nenhum match.
                        </Heading>
                        <Paragraph size="large">Mas fique tranquilo(a)!</Paragraph>
                        <Paragraph size="large">
                          Assim que tivermos atualizações, você será notificado via e-mail e
                          plataforma 🚀
                        </Paragraph>
                      </Col>
                      <Col span={3}>
                        <Image src={notebook} />
                      </Col>
                    </Row>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Heading>Meus mentorados:</Heading>
                    <Timeline>
                      {acceptedList.map((item, index) => (
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
                  </Fragment>
                )}
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
