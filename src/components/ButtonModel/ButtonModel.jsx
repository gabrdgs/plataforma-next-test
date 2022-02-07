import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import styles from './ButtonModel.module.scss';

export default function ButtonModel({
  children,
  border = 'round',
  width = 'default',
  height = 'default',
  color = 'default',
  disabled = false,
  align = 'center',
  danger = false,
  href = '',
  onClick,
}) {
  return href ? (
    <Link href={href} passHref>
      <Button
        className={styles.ButtonModel}
        data-border={border}
        data-width={width}
        data-height={height}
        data-color={color}
        disabled={disabled}
        data-align={align}
        danger={danger}
        onClick={onClick}
      >
        {children}
      </Button>
    </Link>
  ) : (
    <Button
      className={styles.ButtonModel}
      data-border={border}
      data-width={width}
      data-height={height}
      data-color={color}
      disabled={disabled}
      data-align={align}
      danger={danger}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
