import sequelize from '../db.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export default Brand;
