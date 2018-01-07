import React from 'react';
import PropTypes from 'prop-types';
import { LocaleProvider } from 'antd';
import { Layout } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Layout.css';
import Header from '../Header';

const { Footer, Content } = Layout;

class Layout2 extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Layout className={s.pageWrapper}>
        <Header />

        {/* <Content style={{ margin: '24px 16px 0' }} > */}
        <div className={s.mainWrapper}>
          <div className={s.mainContainer}>
            {this.props.children}
          </div>
        </div>
        {/* </Content> */}
        <Footer className={s.footer}>
          {new Date().getFullYear()} C.A. EL UNIVERSO. TODOS LOS DERECHOS RESERVADOS
        </Footer>
      </Layout>
    );
  }
}

export default withStyles(s)(Layout2);
