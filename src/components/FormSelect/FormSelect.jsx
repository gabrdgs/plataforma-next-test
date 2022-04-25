import React from 'react';
import { Select, Form } from 'antd';

export default function FormSelect({
  placeholder = '',
  label = '',
  list = [],
  isArrayOfObjects = true,
  name = '',
  rules,
  tooltip = '',
  mode,
  orderedList = false,
}) {

  let listUptated = orderedList ? getOrderedArray(list) : list;
  if (!isArrayOfObjects) {
    listUptated = list.reduce((acc, item) => {
      acc.push({ value: item });
      return acc;
    }, []);
  }

  return (
    <Form.Item name={name} label={label} rules={rules} tooltip={tooltip}>
      <Select
        placeholder={placeholder}
        mode={mode}
        maxTagCount="responsive"
        showSearch
        optionFilterProp="children"
        allowClear
        style={{ width: '100%' }}
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
      >
        {listUptated.map((item, index) => (
          <Select.Option value={item.value} key={`item-${index}`}>
            {item.value}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

const getOrderedArray = (arrayOfObjects) => {
  return arrayOfObjects.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });
};
