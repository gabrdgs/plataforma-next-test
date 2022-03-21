import React, { Fragment } from 'react';
import { Intro } from './Intro';
import { Methodology } from './Methodology';
import { Development } from './Development';
import { Conclusion } from './Conclusion';
import { MenuModel } from '../../../components/MenuModel';
import { OrderedListOutlined } from '@ant-design/icons';

export default function Mentor({}) {
    const menuItems = [
      {
        key: 'begin',
        title: 'Tutorial',
        icon: <OrderedListOutlined />,
      },
    ];
  return (
    <Fragment>
      <MenuModel menuItems={menuItems} userType="mentor" />
      <Intro />
      <Methodology />
      <Development />
      <Conclusion />
    </Fragment>
  );
}
