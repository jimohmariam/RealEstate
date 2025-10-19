
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const fetchproperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/properties');
        const data = await response.json();
        setPostCount(data.length);
        console.log('Fetched :', data.length);
      } catch (error) {
        console.error('Error fetching Properties:', error);
      }
    };

    fetchproperties();
  }, []);

  return (
    <div>
      <h2 style={{color:'white'}}>Dashboard</h2>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h3 style={{color:'white'}}>Analytics</h3>
        <p style={{color:'white'}}>Total Properties: {postCount}</p>
      </div>
    </div>
  );
};

export default Dashboard;
