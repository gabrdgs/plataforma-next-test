import React from 'react';
import { Radio, Form, Space } from 'antd';

export default function FormRadioGroup({ label = '', list = [], name = '', rules, tooltip = '' }) {
  return (
    <Form.Item name={name} label={label} rules={rules} tooltip={tooltip}>
      <Radio.Group>
        <Space direction="vertical" size={20}>
          {list.map((item, index) => (
            <Radio value={index + 1} key={`o-${index}`}>
              {item}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
}
