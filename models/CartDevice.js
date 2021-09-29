import sequelize from '../db.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const CartDevice = sequelize.define('cart_device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default CartDevice;
