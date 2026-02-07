const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: DataTypes.ENUM('CLAIMED','PICKED','DELIVERED'),
    defaultValue: 'CLAIMED'
  }
}, {
  tableName: 'transactions',
  timestamps: false
});

module.exports = Transaction;

