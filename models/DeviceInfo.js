import sequelize from '../db.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const DeviceInfo = sequelize.define('device_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false }
});

export default DeviceInfo;
