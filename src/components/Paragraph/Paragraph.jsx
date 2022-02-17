import React from 'react';
import { Typography } from 'antd';
import styles from './Paragraph.module.scss';

const { Text } = Typography;

export default function Paragraph({
  children,
  alignment = 'start',
  color = 'primary',
  italic = false,
  underline = false,
  strong = false,
  weight = 'default',
  size = 'default',
}) {
  return (
    <div className={styles.Paragraph} data-alignment={alignment}>
      <Text
        className={styles.Paragraph}
        italic={italic}
        underline={underline}
        strong={strong}
        data-color={color}
        data-weight={weight}
        data-size={size}
      >
        {children}
      </Text>
    </div>

  );
}
