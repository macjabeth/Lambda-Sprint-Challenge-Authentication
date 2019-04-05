import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from '../actions';

const Jokes = ({ fetchJokes, jokes }) => {
  useEffect(fetchJokes);

  return (
    <Fragment>
      <h3>Dad Jokes</h3>
      <ul>
        {jokes.map(({ id, joke }) => (
          <li key={id}>{joke}</li>
        ))}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  jokes: state.jokes
});

export default connect(
  mapStateToProps,
  { fetchJokes }
)(Jokes);
