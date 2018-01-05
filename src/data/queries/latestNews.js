import { GraphQLList as List } from 'graphql';
import AnuncioType from '../types/AnuncioType';
import Anuncio from '../models/Anuncio';
import sequelize from '../sequelize';

const latestNews = {
  type: new List(AnuncioType),
  resolve() {
    // return [
    //   {
    //     id: '1',
    //     fullName: 'asdasd',
    //   },
    //   {
    //     id: '2',
    //     fullName: 'ddd',
    //   }
    // ];
    return Anuncio.findAll({
      attributes: [
        'id',
        'urlCorta',
        'precio',
        'marca',
        'modelo',
        'createdAt',
        // [sequelize.literal("marca || ' ' || modelo"), 'fullName'],
      ],
      order: [['createdAt', 'DESC']],
      limit: 10,
    });
  },
};

export default latestNews;

// [models.sequelize.literal("first_name || ' ' || last_name"), 'full_name']
