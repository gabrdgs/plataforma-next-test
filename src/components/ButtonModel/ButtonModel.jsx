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
  htmlType,
  icon,
}) {

  const ButtonConfig = () => {
    return (
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
        htmlType={htmlType}
        icon={icon}
      >
        {children}
      </Button>
    );
  }

  return href ? (
    <Link href={href} passHref>
      <a>
        <ButtonConfig />
      </a>
    </Link>
  ) : (
    <ButtonConfig />
  );
}
