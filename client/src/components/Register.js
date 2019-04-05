import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authLogin, authSignup } from '../actions';
import { useInput } from '../hooks';
import '../styles/register.css';

const Register = ({ history, authLogin, authSignup }) => {
  if (localStorage.getItem('token')) return <Redirect to="/" />;

  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState(null);

  const formToggle = () => setRegistering(!registering);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      if (registering) await authSignup({ username, password });
      await authLogin({ username, password });
      history.push('/jokes');
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => setError(null), 3000);
      setUsername(''); setPassword('');
    }
  };

  return (
    <Fragment>
      {error && <h6>{error}</h6>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={updateUsername} />
        <input type="password" placeholder="Password" value={password} onChange={updatePassword} />
        <div>
          <input type="submit" value="Submit" />
          {registering ? (
            <small>
              Already a member? <span onClick={formToggle}>Sign in</span>
            </small>
          ) : (
            <small>
              Not a member? <span onClick={formToggle}>Sign up</span>
            </small>
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default connect(null, { authLogin, authSignup })(Register);
