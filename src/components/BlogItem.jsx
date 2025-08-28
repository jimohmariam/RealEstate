
import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ post }) => {
  const excerpt = post.body.substring(0, 100) + '...';

  return (
    <div className="blog-item">
      <img src={post.imageUrl} alt={post.title} />
      <div className="blog-item-content">
        <h2>{post.title}</h2>
        <p>{excerpt}</p>
        <div className="author">By: {post.author}</div>
        <Link to={`/post/${post.id}`} className="btn">Read More</Link>
      </div>
    </div>
  );
};

export default BlogItem;
