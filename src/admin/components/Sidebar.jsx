
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <NavLink to="/admin/dashboard"  style={{color:'white'}}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/manage-Properties" style={{color:'white'}}>Manage Properties</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
