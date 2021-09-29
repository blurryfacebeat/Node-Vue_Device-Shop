import Brand from './Brand.js';
import Cart from './Cart.js';
import CartDevice from './CartDevice.js';
import Device from './Device.js';
import DeviceInfo from './DeviceInfo.js';
import Rating from './Rating.js';
import Type from './Type.js';
import User from './User.js';
import TypeBrand from './TypeBrand.js';

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(CartDevice);
CartDevice.belongsTo(Cart);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(CartDevice);
CartDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

export default {
  Brand,
  Cart,
  CartDevice,
  Device,
  DeviceInfo,
  Rating,
  Type,
  User,
  TypeBrand
};
