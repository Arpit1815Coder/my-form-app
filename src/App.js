import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/form">Form</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
