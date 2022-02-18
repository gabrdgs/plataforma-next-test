import React, { Fragment } from 'react';

import { Intro } from './Intro';
import { Methodology } from './Methodology';
import { Development } from './Development';
import { Conclusion } from './Conclusion';
import { MenuModel } from '../../../components/MenuModel';

export default function Mentor({}) {
    const menuItems = [
      {
        key: 'begin',
        title: 'Início',
      },
      {
        key: 'mentoring',
        title: 'Mentoria',
      },
      {
        key: 'challenges',
        title: 'Desafios',
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
