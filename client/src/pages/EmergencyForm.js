import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EmergencyForm() {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const submitEmergency = async () => {
    try {
      await axios.post('http://localhost:5000/api/emergency/create', {
        type, location, details
      });
      alert("Emergency Submitted");
      navigate(`/helpline/${type}`);  // redirect with emergency type
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
    <div>
      <h2>Report Emergency</h2>
      <input placeholder="Type (e.g. Fire, Accident)" onChange={(e) => setType(e.target.value)} />
      <input placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
      <textarea placeholder="Details" onChange={(e) => setDetails(e.target.value)} />
      <button onClick={submitEmergency}>Submit</button>
    </div>
  );
}
