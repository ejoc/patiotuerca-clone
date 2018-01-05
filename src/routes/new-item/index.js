import React from 'react';
import Layout from '../../components/Layout';
import NewItem from './New';
// import NewItem from '../../components/NewItem';

const title = 'Anuncios';

function action() {
  return {
    chunks: ['new-item'],
    title,
    component: (
      <Layout>
        <NewItem title={title} />
      </Layout>
    ),
  };
}

export default action;
