import { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LogoHorizontal from './images/logo-horizontal.png';
import LogoSign from './images/logo-sign.png';

const Logo = forwardRef(({ variant = '' }, ref) => (
  <Image
    ref={ref}
    src={variant === 'horizontal' ? LogoHorizontal : LogoSign}
    alt="Logo"
    height={40}
    width={190}
  />
));

Logo.displayName = 'Logo';

export default Logo;
