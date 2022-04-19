import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Col, Row } from 'antd';

import Styles from './NavBarGeneral.module.scss';

import semearLogo from '../Logo/images/logo-horizontal.png';

function NavBarGeneral() {
  return (
    <nav className={Styles.NavBarGeneral}>
      <div className={Styles.NavBarGeneral__Logo}>
        <Link href="/">
          <a>
            <Row justify="start" align="middle">
              <Col span={18}>
                <Image alt="Logo Semear" src={semearLogo} width={190} height={45} />
              </Col>
            </Row>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBarGeneral;
