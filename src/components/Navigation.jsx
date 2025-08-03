import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="mon_header">
      <div className="mon_header2">
        <div className="mon_header_body">
          <div className="mon_title">
            <img src="/new-logo.svg" alt="氧化铝数据中心" />
          </div>
          <nav className="main-navigation">
            <ul className="navigation-menu">
              <li 
                onClick={() => handleNavigation('/')} 
                className={`navigation-item ${isActive('/') ? 'active' : ''}`}
              >
                首页
              </li>
              <li 
                onClick={() => handleNavigation('/literature')} 
                className={`navigation-item ${isActive('/literature') ? 'active' : ''}`}
              >
                文献库
              </li>
              <li 
                onClick={() => handleNavigation('/database')} 
                className={`navigation-item ${isActive('/database') ? 'active' : ''}`}
              >
                数据库
              </li>
              <li 
                onClick={() => handleNavigation('/decision')} 
                className={`navigation-item ${isActive('/decision') ? 'active' : ''}`}
              >
                数智工坊
              </li>
              <li 
                onClick={() => handleNavigation('/resources')} 
                className={`navigation-item ${isActive('/resources') ? 'active' : ''}`}
              >
                平台教程
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;