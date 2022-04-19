import { Fragment } from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { Container } from '../Container';

import Styles from './NavBarGeneral.module.scss';



function NavBarGeneral() {
  return (
        <nav className={Styles.NavBarGeneral}>
          <div className={Styles.NavBarGeneral__Logo}>
            <Link href="/">
              <a>
                <Logo variant="horizontal" />
              </a>
            </Link> 
          </div>
        </nav>
  );
}

export default NavBarGeneral;
