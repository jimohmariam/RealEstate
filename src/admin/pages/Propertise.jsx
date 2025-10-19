
import React, { useState, useEffect } from 'react';
import BlogList from '../../components/BlogList';

const Home = () => {
  const [properties, setproperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchproperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch Properties');
        }
        const data = await response.json();
        console.log("fetch",data.slice(1,))
        setproperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchproperties();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
    
      <BlogList properties={properties} />
    </div>
  );
};
 
export default Home;
