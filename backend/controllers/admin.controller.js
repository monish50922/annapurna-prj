const { User, Donation } = require('../models');

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  res.json(users);
};

exports.verifyNGO = async (req, res) => {
  const ngo = await User.findByPk(req.params.id);
  if (!ngo || ngo.role !== 'NGO') {
    return res.status(400).json({ message: 'Invalid NGO' });
  }

  ngo.is_verified = true;
  await ngo.save();

  res.json({ message: 'NGO verified successfully' });
};

exports.getReports = async (req, res) => {
  const totalUsers = await User.count();
  const totalDonations = await Donation.count();
  const delivered = await Donation.count({ where: { status: 'DELIVERED' } });

  res.json({
    totalUsers,
    totalDonations,
    delivered
  });
};
