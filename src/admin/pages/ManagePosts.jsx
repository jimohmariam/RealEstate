import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ManageProperties = () => {
  const [properties, setproperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchproperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/properties'); // lowercase
        const data = await response.json();
        setproperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchproperties();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await fetch(`http://localhost:5000/properties/${id}`, {
          method: 'DELETE',
        });
        setproperties(properties.filter(post => post.id !== id));
      } catch (error) {
        console.error('Error deleting property:', error);
      }
    }
  };

  return (
    <div>
      <h2 style={{color:'black', fontSize:'40px'}}>Manage Properties</h2>
      <Link to="/admin/add-post">
        <button style={{color:'black'}}>Add New Post</button>
      </Link>
      <div style={{ marginTop: '20px' }}>
        {properties.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <h3 style={{color:'beige'}}>{post.title}</h3>
            <p style={{color:'beige'}}>Price: ${post.price}</p>
            <p style={{color:'beige'}}>Bedrooms: {post.bedrooms} | Bathrooms: {post.bathrooms}</p>
            <div>
              <button onClick={() => navigate(`/admin/edit-post/${post.id}`)} style={{ marginRight: '10px' }}>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProperties;
