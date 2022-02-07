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

import linkedinImage from '../../assets/images/socialMedia/linkedin.png';
import instagramImage from '../../assets/images/socialMedia/instagram.png';
import facebookImage from '../../assets/images/socialMedia/facebook.png';
import youtubeImage from '../../assets/images/socialMedia/youtube.png';

const icons = [
  {
    image: linkedinImage,
    link: 'https://www.linkedin.com/company/isemear',
  },
  {
    image: instagramImage,
    link: 'https://www.instagram.com/isemearoficial/',
  },
  {
    image: facebookImage,
    link: 'https://www.facebook.com/isemear',
  },
  {
    image: youtubeImage,
    link: 'https://www.youtube.com/channel/UCVX26cPzN0MrCHTrrL4HYug',
  },
];

export default function SocialMedia() {
  return (
    <Row gutter={100}>
      <Col span={100}>
        <Space size="large">
          <a href={icons.link} target="_blank">
            <InstagramOutlined style={{ color: '#fff' }}/>
          </a>
          <a href={icons.link}>
            <FacebookOutlined style={{ color: '#fff' }} />
          </a>
          <a href={icons.link}>
            <LinkedinOutlined style={{ color: '#fff' }} />
          </a>
          <a href={icons.link}>
            <YoutubeOutlined style={{ color: '#fff' }} />
          </a>
        </Space>
      </Col>
    </Row>
  );
}
