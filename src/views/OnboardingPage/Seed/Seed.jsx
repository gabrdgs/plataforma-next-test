import React, { Fragment } from 'react';

import { Intro } from './Intro';
import { Methodology } from './Methodology';
import { Development } from './Development';
import { Conclusion } from './Conclusion';

export default function Seed({}) {
  return (
    <Fragment>
      <Intro />
      <Methodology />
      <Development />
      <Conclusion />
    </Fragment>
  );
}
