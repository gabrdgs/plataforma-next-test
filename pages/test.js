import React, { useState, Fragment } from 'react';
import { MenuModel } from '../src/components/MenuModel';
import { Video } from '../src/components/Video';
import { UnorderedListOutlined, HeartOutlined } from '@ant-design/icons';


export default function Thanks() {
    const [keyMenu, setKeyMenu] = useState('all');

    const onClickMenu = (event) => {
      setKeyMenu(event.key);
    };

    const menuItems = [
      {
        key: 'all',
        title: 'Todos os convites',
        icon: <UnorderedListOutlined />,
      },
      {
        key: 'accepted',
        title: 'Meus matches',
        icon: <HeartOutlined />,
      },
    ];

  return (
    <Fragment>
      <MenuModel
        onClick={onClickMenu}
        selectedKeys={keyMenu}
        menuItems={menuItems}
        userType="seed"
      />
      <Video youtubeID="HR1BaFO0R1I" title="Manifesto Semear" />
    </Fragment>
  );
}
