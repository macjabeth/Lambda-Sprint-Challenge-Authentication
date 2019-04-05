import React from "react";
import { withRouter, NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = ({ history }) => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  }

  return (
    <header>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/jokes">Jokes</NavLink>
        {token && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
