const User = require('./user.model');
const Donation = require('./donation.model');
const Transaction = require('./transaction.model');

User.hasMany(Donation, { foreignKey: 'donor_id' });
Donation.belongsTo(User, { foreignKey: 'donor_id' });

Donation.hasOne(Transaction, { foreignKey: 'donation_id' });
Transaction.belongsTo(Donation, { foreignKey: 'donation_id' });

User.hasMany(Transaction, { foreignKey: 'ngo_id' });
Transaction.belongsTo(User, { foreignKey: 'ngo_id' });

module.exports = {
  User,
  Donation,
  Transaction
};

