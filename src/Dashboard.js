import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchDevices = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/devices', {
                headers: { 'Authorization': token }
            });
            setDevices(response.data);
        };
        fetchDevices();
    }, []);

    return (
        <div>
            <h1>Devices</h1>
            <ul>
                {devices.map(device => (
                    <li key={device.id}>{device.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
