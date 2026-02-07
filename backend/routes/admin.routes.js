const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const adminController = require('../controllers/admin.controller');

router.get('/users', auth(['ADMIN']), adminController.getAllUsers);
router.put('/verify-ngo/:id', auth(['ADMIN']), adminController.verifyNGO);
router.get('/reports', auth(['ADMIN']), adminController.getReports);

module.exports = router;
