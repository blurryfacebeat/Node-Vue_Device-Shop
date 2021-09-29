import sequelize from '../db.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Cart = sequelize.define('cart', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default Cart;
