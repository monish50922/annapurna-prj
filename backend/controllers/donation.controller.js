const { Donation, Transaction } = require('../models');

exports.createDonation = async (req, res) => {
  try {
    const donation = await Donation.create({
      donor_id: req.user.id,
      food_type: req.body.food_type,
      quantity: req.body.quantity,
      pickup_time: req.body.pickup_time,
      location: req.body.location
    });

    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.findAll({
      where: { status: 'POSTED' }
    });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.claimDonation = async (req, res) => {
  try {
    const donation = await Donation.findByPk(req.params.id);

    if (!donation || donation.status !== 'POSTED') {
      return res.status(400).json({ message: 'Donation not available' });
    }

    donation.status = 'CLAIMED';
    await donation.save();

    await Transaction.create({
      donation_id: donation.id,
      ngo_id: req.user.id
    });

    res.json({ message: 'Donation claimed successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    transaction.status = req.body.status;
    await transaction.save();

    res.json({ message: 'Status updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

