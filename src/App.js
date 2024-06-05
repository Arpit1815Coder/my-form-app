import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <nav className="nav-bar">
      <h5>Click on Form to open</h5>
        <Link to="/form" className="nav-link">Form</Link>
        
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
