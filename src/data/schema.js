import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import latestNews from './queries/latestNews';
import featuredNews from './queries/featuredNews';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      latestNews,
      featuredNews,
    },
  }),
});

export default schema;
