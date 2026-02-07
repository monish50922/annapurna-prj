const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const donationController = require('../controllers/donation.controller');

router.post('/', auth(['DONOR']), donationController.createDonation);
router.get('/', auth(['NGO']), donationController.getAllDonations);
router.post('/:id/claim', auth(['NGO']), donationController.claimDonation);
router.put('/transaction/:id', auth(['NGO']), donationController.updateStatus);

module.exports = router;
