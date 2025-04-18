import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const helplines = {
  Fire: '🔥 Fire Brigade: 101',
  Accident: '🚑 Ambulance: 102',
  Medical: '🏥 Medical Emergency: 108',
  Police: '🚓 Police: 100',
  Women: '👩 Women Helpline: 1091',
  Default: '📞 Emergency Control Room: 112',
};

export default function Helpline() {
  const navigate = useNavigate(); // ✅ INSIDE component
  const { type } = useParams();   // ✅ INSIDE component

  const helpline = helplines[type] || helplines.Default;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Emergency Type: {type}</h2>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{helpline}</p>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}
