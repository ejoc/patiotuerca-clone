import { GraphQLList as List } from 'graphql';
import AnuncioType from '../types/AnuncioType';
import Anuncio from '../models/Anuncio';

const featuredNews = {
  type: new List(AnuncioType),
  resolve() {
    return Anuncio.findAll({
      attributes: ['id', 'urlCorta', 'precio', 'marca', 'modelo', 'foto'],
      where: {
        destacado: true,
      },
      order: [['createdAt', 'DESC']],
      limit: 4,
    })
  },
};

export default featuredNews;
