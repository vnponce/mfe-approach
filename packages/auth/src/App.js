import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import SignIn from "./components/Signin";
import Signup from "./components/Signup";

export default ({ history }) => {
  return (
    <div style={{ border: '3px solid blue' }}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};
