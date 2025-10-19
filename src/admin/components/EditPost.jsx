import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState(''); // 👈 new field for video link
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/properties/${id}`);
        const data = await response.json();
        setTitle(data.title || '');
        setBody(data.body || '');
        setImageUrl(data.imageUrl || '');
        setVideoUrl(data.videoUrl || ''); // 👈 load video if it exists
        setPrice(data.price || '');
        setAuthor(data.author || '');
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      body,
      imageUrl,
      videoUrl, // 👈 include video URL in update
      price,
      author,
      date: new Date().toISOString().split('T')[0],
    };

    try {
      await fetch(`http://localhost:5000/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{color:'black'}}>Edit Post</h2>

      {/* Title */}
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'blanchedalmond'}}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      {/* Body */}
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'blanchedalmond'}}>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', height: '200px' }}
        />
      </div>

      {/* Price */}
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'blanchedalmond'}}>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      {/* Image */}
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'blanchedalmond'}}>Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            style={{
              width: '100%',
              marginTop: '10px',
              borderRadius: '5px',
              objectFit: 'cover',
            }}
          />
        )}
      </div>

      {/* Video */}
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'blanchedalmond'}}>Video URL</label>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Paste a video link (e.g. YouTube or MP4)"
          style={{ width: '100%', padding: '8px' }}
        />
        {videoUrl && (
          <video
            src={videoUrl}
            controls
            style={{
              width: '100%',
              marginTop: '10px',
              borderRadius: '5px',
              backgroundColor: '#000',
            }}
          />
        )}
      </div>

      {/* Author */}
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'blanchedalmond'}}>Location</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
