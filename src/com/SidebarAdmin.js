import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SidebarAdmin.css'; 

const SidebarAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="logo-details" >
        <div className="logo_name">Manager</div>
        <div id="btn" className="bx bx-menu" onClick={toggleSidebar}>
  <FaUser />
</div>

      </div>
      <ul className="nav-list" >
        <li style={{height:'50px'}}>
          <a className="icon" href="salemanagerDash">
            <FaShoppingCart />
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li style={{height:'50px'}}>
          <a className="icon" href="userprofile">
            <FaUser />
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li style={{height:'50px'}}>
          <a className="icon" href="salemanagerOrderListControl">
            <FaShoppingCart />
            <span className="links_name">Order List</span>
          </a>
          <span className="tooltip">Order List</span>
        </li>
        <li className="profile">
          <a className="icon" href="logout">
            <FaSignOutAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
