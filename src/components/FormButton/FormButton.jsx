import React from 'react';
import { Row, Space, Form } from 'antd';
import { ButtonModel } from '../ButtonModel';

export default function FormButton({
  color = 'primary',
  current = 0,
  length = 1,
  onBack,
  onCheck,
  width = 'small',
}) {
  return (
    <Row justify="end">
      <Space size={5}>
        {current > 0 && (
          <Form.Item>
            <ButtonModel width={width} color={`${color}Border`} onClick={onBack}>
              Voltar
            </ButtonModel>
          </Form.Item>
        )}
        {current < length - 1 && (
          <Form.Item>
            <ButtonModel width={width} color={color} onClick={onCheck} htmlType="submit">
              Avançar
            </ButtonModel>
          </Form.Item>
        )}
        {current === length - 1 && (
          <Form.Item>
            <ButtonModel width={width} color={color} onClick={onCheck} htmlType="submit">
              Enviar
            </ButtonModel>
          </Form.Item>
        )}
      </Space>
    </Row>
  );
}
