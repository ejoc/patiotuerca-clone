import React from 'react';
import { Row } from 'antd';

import ListItem from './ListItem';

const ListFeaturedItem = ({ featuredNews }) =>
  <Row gutter={1}>
    {featuredNews &&
      featuredNews.map(item => <ListItem key={item.id} item={item} />)}
  </Row>;

export default ListFeaturedItem;
