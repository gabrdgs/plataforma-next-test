import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row, Card, Menu, Space, Avatar, Divider } from 'antd';
import { MessageFilled, MailFilled, QuestionCircleFilled, LogoutOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Paragraph } from '../Paragraph';
import mentors from '../../views/shared/MockMentor';
import seeds from '../../views/shared/MockSeed';

import logoSemear from '../../assets/images/brands/logo-semear.png';

const mentorUser = mentors[0];
const seedUser = seeds[0];

export default function MenuModel(props) {
  const user = props.userType == 'mentor' ? mentorUser : seedUser;
  const subtitleUser =
    props.userType == 'mentor' && user.company && user.profession
      ? `${user.profession} na ${user.company}`
      : `${user.course} na ${user.college}`;

  return (
    <Fragment>
      <Menu onClick={props.onClick} selectedKeys={props.keyMenu} mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <Avatar size={36} src={<Image src={logoSemear} />} />
          </Link>
        </Menu.Item>
        {props.menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
            {item.title}
          </Menu.Item>
        ))}
        <Menu.SubMenu
          key="card-profile"
          style={{ position: 'absolute', right: 50 }}
          title={<Avatar size={36} src={<Image src={user.imageProfile} />} />}
        >
          <Card style={{ width: '400px' }}>
            <Menu.ItemGroup>
              <Link href={`/profile-${props.userType}`}>
                <Row align="middle">
                  <Space size={20}>
                    <Avatar size={96} src={<Image src={user.imageProfile} />} />
                    <Col span={20}>
                      <Paragraph strong>{user.name}</Paragraph>
                      <Paragraph size="small">{subtitleUser}</Paragraph>
                      <Paragraph size="small" weight="light" color="tertiary">
                        Veja seu perfil
                      </Paragraph>
                    </Col>
                  </Space>
                </Row>
              </Link>
            </Menu.ItemGroup>
            <Divider />
            <Menu.ItemGroup>
              <Row align="middle">
                <Space size={10}>
                  <Avatar size={32} icon={<MessageFilled />} />
                  <Col>
                    <Paragraph>Dar feedback</Paragraph>
                    <Paragraph size="small" color="tertiary">
                      Ajude-nos a melhorar nossa plataforma
                    </Paragraph>
                  </Col>
                </Space>
              </Row>
            </Menu.ItemGroup>
            <Divider />
            <Menu.ItemGroup>
              <Row align="middle">
                <Space size={10}>
                  <Avatar size={32} icon={<MailFilled />} />
                  <Col>
                    <Paragraph>Central de ajuda</Paragraph>
                  </Col>
                </Space>
              </Row>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Row align="middle">
                <Space size={10}>
                  <Avatar size={32} icon={<QuestionCircleFilled />} />
                  <Col>
                    <Paragraph>Perguntas frequentes</Paragraph>
                  </Col>
                </Space>
              </Row>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Row align="middle">
                <Space size={10}>
                  <Avatar size={32} icon={<LogoutOutlined />} />
                  <Col>
                    <Paragraph>Sair</Paragraph>
                  </Col>
                </Space>
              </Row>
            </Menu.ItemGroup>
          </Card>
        </Menu.SubMenu>
      </Menu>
    </Fragment>
  );
}
