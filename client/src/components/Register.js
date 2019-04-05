import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authLogin, authSignup } from '../actions';
import { useInput } from '../hooks';
import '../styles/register.css';

const Register = ({ history, authLogin, authSignup, error }) => {
  if (localStorage.getItem('token')) return <Redirect to="/" />;

  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();
  const [registering, setRegistering] = useState(false);

  const formToggle = () => setRegistering(!registering);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      if (registering) await authSignup({ username, password });
      await authLogin({ username, password });
      history.push('/jokes');
    } catch {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <Fragment>
      {error && <h6>{error}</h6>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={updateUsername} required />
        <input type="password" placeholder="Password" value={password} onChange={updatePassword} required />
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

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, { authLogin, authSignup })(Register);
