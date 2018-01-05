import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
  GraphQLBoolean as BooleanType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const AnuncioType = new ObjectType({
  name: 'Anuncio',
  fields: {
    id: { type: new NonNull(ID) },
    titulo: { type: StringType },
    urlCorta: { type: StringType },
    descripcion: { type: StringType },
    precio: { type: FloatType },
    marca: { type: StringType },
    modelo: { type: StringType },
    kilometraje: { type: StringType },
    foto: { type: StringType },
    destacado: { type: BooleanType },
    fullName: { type: StringType },
    createdAt: { type: StringType },
  },
});

export default AnuncioType;
