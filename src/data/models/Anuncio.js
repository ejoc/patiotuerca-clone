import DataType from 'sequelize';
import Model from '../sequelize';

const Anuncio = Model.define(
  'Anuncio',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    titulo: {
      type: DataType.STRING(30),
    },

    urlCorta: {
      type: DataType.STRING(50),
    },

    descripcion: {
      type: DataType.STRING(255),
    },

    precio: {
      type: DataType.FLOAT,
    },

    marca: {
      type: DataType.STRING(30),
    },

    modelo: {
      type: DataType.STRING(30),
    },

    kilometraje: {
      type: DataType.STRING(30),
    },

    foto: {
      type: DataType.STRING(100),
    },

    destacado: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },

    // fullName: {
    //   type: DataType.VIRTUAL,
    //   get(){
    //     return '';
    //   }
    // }
  },
  {
    timestamps: true,
    getterMethods: {
      fullName() {
        return this.marca + ' ' + this.modelo
      }
    },
  },
);

export default Anuncio;
