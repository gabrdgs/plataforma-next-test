import React from 'react';
import { Typography } from 'antd';
import styles from './HeadingModel.module.scss';

const { Title } = Typography;

export default function HeadingModel({
  children,
  level = 2,
  alignment = 'start',
  color = 'light',
  italic = false,
  underline = false,
}) {
  return (
    <div className={styles.Heading}>
      <Title data-level={level} data-color={color} italic={italic} underline={underline} data-alignment={alignment}>
        {children}
      </Title>
    </div>
  );
}
