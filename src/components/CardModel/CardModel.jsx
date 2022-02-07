import React from 'react';
import { Card, Row } from 'antd';
import styles from './CardModel.module.scss';

export default function CardModel({
  children,
  border = 'round',
  width = 'default',
  height = 'default',
  color = 'default',
  hoverable = false,
  bordered = true,
}) {
  return (
    <Card
      className={styles.CardModel}
      data-border={border}
      data-width={width}
      data-height={height}
      data-color={color}
      hoverable={hoverable}
      bordered={bordered}
    >
      {children}
    </Card>
  );
}
