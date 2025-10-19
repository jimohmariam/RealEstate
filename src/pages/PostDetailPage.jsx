import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/properties/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await fetch(`http://localhost:5000/properties/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete post');
        }
        navigate('/');
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail" style={{ maxWidth: '800px', margin: 'auto' }}>
      {/* Video section */}
      {post.videoUrl ? (
        <video
          controls
          width="100%"
          style={{ borderRadius: '10px', marginBottom: '20px' }}
        >
          <source src={post.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // fallback if no video URL is found
        <img
          src={post.imageUrl}
          alt={post.title}
          style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }}
        />
      )}

      <div className="post-detail-content">
        <h1>{post.title}</h1>
        <div className="author">
          By: {post.author} on {post.date}
        </div>
        <p>{post.body}</p>

        {/* Optional buttons */}
       <div
  style={{
    marginTop: '20px',
    paddingRight: '20px',
    display: 'flex',              // puts them on one line
    alignItems: 'center',
    gap: '10px',                  // adds space between buttons
    justifyContent: 'flex-end'    // aligns them to the right
  }}
>
  <Link
    to={`/admin/edit-post/${id}`}
    className="btn"
    style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '8px 14px',
      borderRadius: '4px',
      textDecoration: 'none'
    }}
  >
    Edit
  </Link>

  <Link
    to={`/contact`}
    className="btn"
    style={{
      backgroundColor: '#007bff',
      color: 'white',
      padding: '8px 14px',
      borderRadius: '4px',
      textDecoration: 'none'
    }}
  >
    Contact
  </Link>
</div>

      </div>
    </div>
  );
};

export default PostDetailPage;
