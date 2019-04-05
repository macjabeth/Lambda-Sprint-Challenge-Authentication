import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  const token = localStorage.getItem('token');

  return (
    <Fragment>
      <Navigation />
      <main>
        <h1>Welcome...</h1>
        <p>Web authentication is tricksy business, but I'm sure we can handle it.</p>
        {!token && (
          <p>Before we can view the jokes, you'll want to <Link to="/register">sign in</Link> to your account.</p>
        )}
      </main>
    </Fragment>
  );
};

export default Home;
