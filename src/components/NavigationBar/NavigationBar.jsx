import { Fragment } from 'react';
import Link from 'next/link';

import { Popover, Button } from 'antd';

import { CaretDownOutlined, LoginOutlined } from '@ant-design/icons';

import { Logo } from '../Logo';
import { Container } from '../Container';
import {Login} from '../../views/LandingPage/Login'

import styles from './NavigationBar.module.scss';

import LandingPageData from './data/landing-page-menu.json';

function Submenu({content}) 
{
  return content.map(({ label, linkTo }) => (
    <div className={styles.NavigationBar__Submenu__Item} key={label}>
      <Link href={linkTo}>{label}</Link>
    </div>
  ));
}

function NavigationBar() {
  return (
    <header className={styles.NavigationBar}>
      <Container color='primary'>
        <nav className={styles.NavigationBar__Menu}>
          <div className={styles.NavigationBar__Logo}>
            <Link href="/">
              <a>
                <Logo variant="horizontal" />
              </a>
            </Link>
          </div>

          <div className={styles.NavigationBar__Group}>
            {LandingPageData.map(({ label, linkTo = '#', children = [] }) => (
              <Fragment key={label}>
                {children.length > 0 ? (
                  <div key={label} className={styles.NavigationBar__Menu__Item}>
                    <Popover placement="bottom" content={<Submenu content={children} />}>
                      <span>
                        {label} <CaretDownOutlined />
                      </span>
                    </Popover>
                  </div>
                ) : (
                  <div key={label} className={styles.NavigationBar__Menu__Item}>
                    <Link href={linkTo}>{label}</Link>
                  </div>
                )}
              </Fragment>
            ))}

            <Login/>

          </div>
        </nav>
      </Container>
    </header>
  );
}

export default NavigationBar;
