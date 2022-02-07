import { Fragment } from 'react';

import styles from './Section.module.scss';

import { Wave } from '../Wave';

export default function Section({
  bgColor = 'default',
  children,
  fullWidth = false,
  id,
  wave = false,
  waveDirection = 'down',
  innerColor,
  outsideColor,
}) {
  return (
    <Fragment>
      {wave && waveDirection === 'up' && (
        <Wave
          direction="up"
          data-bgcolor={bgColor}
          innerColor={innerColor}
          outsideColor={outsideColor}
        />
      )}

      <section id={id} className={styles.Section} data-bgcolor={bgColor}>
        <div className={!fullWidth ? 'container' : ''}>{children}</div>
      </section>

      {wave && waveDirection === 'down' && (
        <Wave
          direction="down"
          data-bgcolor={bgColor}
          innerColor={innerColor}
          outsideColor={outsideColor}
        />
      )}
    </Fragment>
  );
}
