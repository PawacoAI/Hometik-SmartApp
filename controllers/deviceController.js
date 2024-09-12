const tuyaInstance = require('../config/tuyaConfig');

// Get devices
const getDevices = async (req, res) => {
    try {
        const response = await tuyaInstance.get('/v1.0/devices');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch devices' });
    }
};

// Control device
const controlDevice = async (req, res) => {
    const { id } = req.params;
    const { command } = req.body; // Example command: { "value": true }
    try {
        const response = await tuyaInstance.post(`/v1.0/devices/${id}/commands`, {
            commands: [{ code: 'switch_1', value: command.value }]
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to control device' });
    }
};

module.exports = { getDevices, controlDevice };
