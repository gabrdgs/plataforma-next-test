import React from 'react';
import { Typography } from 'antd';
import styles from './Heading.module.scss';

const { Title } = Typography;

export default function Heading({
  children,
  level = 2,
  alignment = 'start',
  color = 'primary',
  italic = false,
  underline = false,
}) {
  return (
    <div className={styles.Heading} data-alignment={alignment}>
      <Title level={level} data-color={color} italic={italic} underline={underline}>
        {children}
      </Title>
    </div>
  );
}
