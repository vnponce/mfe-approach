import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Product from './components/Product';
import Hero from './components/Hero';
import Input from './components/Input';
import Button from './components/Button';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/product" component={Product} />
          <Route path="/hero" component={Hero} />
          <Route path="/input" component={Input} />
          <Route path="/button" component={Button} />
          <Route path="/" component={Product} />
        </Switch>
      </Router>
    </div>
  );
};
