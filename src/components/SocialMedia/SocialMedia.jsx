import React from 'react';
import { Button, Col, Row, Typography, Card, Space, List, Avatar } from 'antd';
import Image from 'next/image';
import styles from './SocialMedia.module.scss';

import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

import semearLogo from '../Logo/images/logo-horizontal.png';
import { Fragment } from 'react/cjs/react.production.min';

export default function SocialMedia() {
  return (
    <Fragment>
      <Space direction="vertical" size="large">
        <Row justify="center">
          <Col>
            <Space size="large">
              <a href="https://www.instagram.com/isemearoficial/" target="_blank" rel="noreferrer">
                <InstagramOutlined style={{ fontSize: '40px', color: '#fff' }} />
              </a>
              <a href="https://www.facebook.com/isemear" target="_blank" rel="noreferrer">
                <FacebookOutlined style={{ fontSize: '40px', color: '#fff' }} />
              </a>
              <a href="https://www.linkedin.com/company/isemear" target="_blank" rel="noreferrer">
                <LinkedinOutlined style={{ fontSize: '40px', color: '#fff' }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCVX26cPzN0MrCHTrrL4HYug"
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeOutlined style={{ fontSize: '40px', color: '#fff' }} />
              </a>
            </Space>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={18}>
            <Image alt="Logo Semear" src={semearLogo} width={190} height={45} />
          </Col>
        </Row>
      </Space>
    </Fragment>
  );
}
