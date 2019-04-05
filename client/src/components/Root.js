import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Register from './Register';
import Jokes from './Jokes';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/jokes" component={Jokes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
