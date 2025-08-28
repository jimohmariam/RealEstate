
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        const data = await response.json();
        setPostCount(data.length);
        console.log('Fetched posts:', data.length);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h3>Analytics</h3>
        <p>Total Posts: {postCount}</p>
      </div>
    </div>
  );
};

export default Dashboard;
