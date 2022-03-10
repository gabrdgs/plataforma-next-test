import React from 'react';
import { Card, Row, Col } from 'antd';
import styles from './CardModel.module.scss';

export default function CardModel({
  children,
  border = 'round',
  width = 'default',
  height = 'default',
  color = 'default',
  hoverable = false,
  bordered = true,
  alignment="default"
}) {
  return (
    <Card
      className={styles.CardModel}
      data-border={border}
      data-width={width}
      data-height={height}
      data-color={color}
      data-alignment={alignment}
      hoverable={hoverable}
      bordered={bordered}
    >
      <Col>
        {children}
      </Col>
    </Card>
  );
}
