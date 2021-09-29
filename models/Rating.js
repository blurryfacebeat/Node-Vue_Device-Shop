import sequelize from '../db.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating_value: { type: DataTypes.FLOAT, allowNull: false }
});

export default Rating;
