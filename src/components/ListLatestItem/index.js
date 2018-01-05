import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './ListLatestItem.css';

const { Column } = Table;

moment.locale('es');

const LatestNew = ({ latestNews }) =>
  <Table
    dataSource={latestNews}
    rowKey="id"
    pagination={false}
    showHeader={false}
  >
    <Column
      title="Index"
      dataIndex="id"
      render={(text, record, index) => index + 1}
      key="index"
    />
    <Column
      title="Full Name"
      dataIndex="fullName"
      className={s.fullName}
      key="fullName"
    />
    <Column
      className={s.hiddenSm}
      title="Url Corta"
      dataIndex="urlCorta"
      key="urlCorta"
      render={(text, record, index) =>
        <a href={text} target="_blank">
          {text}
        </a>}
    />
    <Column
      title="Precio"
      dataIndex="precio"
      key="precio"
      className={s.currency}
      render={(text, record, index) =>
        <span>
          {Number(text).toLocaleString('en', {
            minimumFractionDigits: 2,
          })}
        </span>}
    />

    <Column
      title="Fecha de publicacion"
      dataIndex="createdAt"
      key="createdAt"
      className={s.createdAt}
      render={(text, record, index) =>
        <span>
          {moment(text).fromNow()}
        </span>}
    />
  </Table>;

export default withStyles(s)(LatestNew);
