import React, { Fragment } from 'react';
import { Intro } from './Intro';
import { Methodology } from './Methodology';
import { Development } from './Development';
import { Conclusion } from './Conclusion';
import { MenuModel } from '../../../components/MenuModel';
import { OrderedListOutlined } from '@ant-design/icons';

const menuItems = [
  {
    key: 'begin',
    title: 'Tutorial',
    icon: <OrderedListOutlined />,
  },
];

export default function Seed({}) {
  return (
    <Fragment>
      <MenuModel menuItems={menuItems} userType="seed" />
      <Intro />
      <Methodology />
      <Development />
      <Conclusion />
    </Fragment>
  );
}
