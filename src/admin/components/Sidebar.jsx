
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <NavLink to="/admin/dashboard" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/manage-posts" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Manage Posts</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
