import React, { useState, useEffect } from 'react';
import { FaUser, FaShoppingCart, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SidebarAdmin.css'; 

const SidebarAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const username = sessionStorage.getItem('username');
    if (username) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Clear session information
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="logo-details">
        <div className="logo_name">Manager</div>
        <div id="btn" className="bx bx-menu" onClick={toggleSidebar}>
          <FaUser />
        </div>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/admin" className="icon">
           <FaShoppingCart />
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/profile" className="icon">
            <FaUser />
            <span className="links_name">User</span>
          </Link>
          <span className="tooltip">User</span>
        </li>
        <li>
          <Link to="/salemanagerOrderListControl" className="icon">
          <FaHeart />
            <span className="links_name">Account List</span>
          </Link>
          <span className="tooltip">Account List</span>
        </li>
        <li className="profile">
          <a className="icon" onClick={handleLogout}>
            <FaSignOutAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
