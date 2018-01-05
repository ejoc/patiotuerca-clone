import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Layout } from 'antd';

import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logoFull.png';

const HeaderAntd = Layout.Header;

class Header extends React.Component {
  render() {
    return (
      <HeaderAntd style={{ background: '#fff' }} className={s.header}>
        <Navigation />
        <Link className={s.logo} to="/">
          <img src={logoUrl} width="280" height="48" alt="logo" />
        </Link>
      </HeaderAntd>
    );
  }
}

export default withStyles(s)(Header);
