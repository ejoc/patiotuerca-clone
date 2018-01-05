import React from 'react';
import { Row, Col } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Form from '../../components/NewItem/Form';
import s from './New.css';

class Anuncio extends React.Component {
  render() {
    return (
      <div>
        <div className={s.title}>
          <h2>CREA TU AVISO</h2>
        </div>
        <Form />
      </div>
    );
  }
}

export default withStyles(s)(Anuncio);
