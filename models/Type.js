import sequelize from '../db.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export default Type;
