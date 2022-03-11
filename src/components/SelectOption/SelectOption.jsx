import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

export default function SelectOption(props) {
  const placeholder = props.placeholder ? props.placeholder : '';
  const label = props.label ? props.label : '';
  const list = props.orderedList ? getOrderedArray(props.list) : props.list;

  return (
    <Select placeholder={placeholder} label={label} mode={props.mode} maxTagCount="responsive">
      {list.map((item, index) => (
        <Select.Option value={item.value} key={`item-${index}`}>
          {item.value}
        </Select.Option>
      ))}
    </Select>
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
}