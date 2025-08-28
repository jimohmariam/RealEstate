import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetailPage from './pages/PostDetailPage';
import AdminLayout from './admin/pages/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import ManagePosts from './admin/pages/ManagePosts';
import AddPostPage from './admin/pages/AddPostPage';
import EditPostPage from './admin/pages/EditPostPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manage-posts" element={<ManagePosts />} />
            <Route path="add-post" element={<AddPostPage />} />
            <Route path="edit-post/:id" element={<EditPostPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;