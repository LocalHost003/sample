import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 5000); // real-time polling
    return () => clearInterval(interval);
  }, []);

  const fetchAlerts = async () => {
    const res = await axios.get('http://localhost:5000/api/emergency/all');
    setAlerts(res.data);
  };

  return (
    <div>
      <h2>Emergency Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert._id}>
            {alert.type} at {alert.location} - {new Date(alert.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
