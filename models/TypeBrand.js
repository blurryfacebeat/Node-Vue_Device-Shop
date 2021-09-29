import sequelize from '../db.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const TypeBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default TypeBrand;
