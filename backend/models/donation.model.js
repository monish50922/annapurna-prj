const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Donation = sequelize.define('Donation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  food_type: DataTypes.STRING,
  quantity: DataTypes.STRING,
  pickup_time: DataTypes.DATE,
  location: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM('POSTED','CLAIMED','PICKED','DELIVERED'),
    defaultValue: 'POSTED'
  }
}, {
  tableName: 'donations',
  timestamps: false
});

module.exports = Donation;

