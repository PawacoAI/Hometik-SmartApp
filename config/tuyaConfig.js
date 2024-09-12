const axios = require('axios');
require('dotenv').config();

const tuyaInstance = axios.create({
    baseURL: 'https://openapi.tuya.com',
    headers: {
        'client_id': process.env.TUYA_CLIENT_ID,
        'client_secret': process.env.TUYA_CLIENT_SECRET
    }
});

module.exports = tuyaInstance;
