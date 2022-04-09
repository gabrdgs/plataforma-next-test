import React, { useState } from 'react';
import { Select } from 'antd';

export default function SelectOption(props) {
  const [optionsSelected, setOptionsSelected] = useState([]);
  const placeholder = props.placeholder ? props.placeholder : '';
  const label = props.label ? props.label : '';
  const list = props.orderedList ? getOrderedArray(props.list) : props.list;
  const maxOptions = props.maxOptions ? props.maxOptions : 100;
  const handleChange = (value) => {
    value.length <= maxOptions && setOptionsSelected(value);
  };

  return (
    <Select
      placeholder={placeholder}
      label={label}
      mode={props.mode}
      maxTagCount="responsive"
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      onChange={handleChange}
      value={optionsSelected}
    >
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
};
