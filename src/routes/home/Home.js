import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col } from 'antd';

import ListFeaturedItem from '../../components/ListFeaturedItem';
import ListLatestItem from '../../components/ListLatestItem';
import s from './Home.css';
import items from './items.graphql';

// function Home ({ data: { featuredNews, latestNews } }) {
//   return (
//     <div>
//       <div className={s.newsItem}>
//         <div className={s.title}>
//           <h2>DESTACADOS</h2>
//         </div>
//         <ListFeaturedItem featuredNews={featuredNews} />
//       </div>
//       <div className={s.newsItem}>
//         <div className={s.title}>
//           <h2>ÚLTIMOS AVISOS</h2>
//         </div>
//         <ListLatestItem latestNews={latestNews} />
//       </div>
//     </div>
//   );
// }

class Home extends React.Component {
  componentDidMount() {
    this.props.data.refetch();
    console.log('wiiiiiii');
  }

  render() {
    const { data: { featuredNews, latestNews } } = this.props;
    return (
      <div>
        <div className={s.newsItem}>
          <div className={s.title}>
            <h2>DESTACADOS</h2>
          </div>
          <ListFeaturedItem featuredNews={featuredNews} />
        </div>
        <div className={s.newsItem}>
          <div className={s.title}>
            <h2>ÚLTIMOS AVISOS</h2>
          </div>
          <ListLatestItem latestNews={latestNews} />
        </div>
      </div>
    );
  }
}

export default compose(withStyles(s), graphql(items))(Home);
