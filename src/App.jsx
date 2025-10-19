import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetailPage from './pages/PostDetailPage';
import AdminLayout from './admin/pages/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import ManageProperties from "./admin/pages/ManagePosts";
import AddPostPage from './admin/pages/AddPostPage';
import Propertise from './admin/pages/Propertise';
import EditPostPage from './admin/pages/EditPostPage';
import Contact from './admin/pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/propertise" element={<Propertise />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manage-Properties" element={<ManageProperties />} />
            <Route path="add-post" element={<AddPostPage />} />
            <Route path="edit-post/:id" element={<EditPostPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;