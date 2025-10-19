
import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ properties }) => {
  return (
    <div className="blog-list">
      {properties.map(post => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;