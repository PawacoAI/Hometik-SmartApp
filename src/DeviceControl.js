import React from 'react';
import axios from 'axios';

const DeviceControl = ({ deviceId }) => {
    const toggleDevice = async (value) => {
        const token = localStorage.getItem('token');
        await axios.post(`/api/device/${deviceId}/control`, { command: { value } }, {
            headers: { 'Authorization': token }
        });
    };

    return (
        <div>
            <button onClick={() => toggleDevice(true)}>Turn On</button>
            <button onClick={() => toggleDevice(false)}>Turn Off</button>
        </div>
    );
};

export default DeviceControl;
