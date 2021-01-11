import React, { lazy, Suspense} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";

// import MarketingApp from "./components/MarketingApp";
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
// import AuthApp from "./components/AuthApp";
const AuthLazy = lazy(() => import('./components/AuthApp'));

export default () => {
  return (
    <BrowserRouter>
        <Nav />
        <hr/>
        <Suspense fallback={<div>Loading [Imagine this is a loading bar]...</div>}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
    </BrowserRouter>
  )
}