const express = require('express');
const { getDevices, controlDevice } = require('../controllers/deviceController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/devices', authMiddleware, getDevices);
router.post('/device/:id/control', authMiddleware, controlDevice);

module.exports = router;
