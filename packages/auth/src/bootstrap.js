import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from "./App";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  // defaultHistory is only on dev isolation
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  // to work in isolation
  if(onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(
    <App history={history}/>,
    el
  );

  return {
    // every parent try to navigate
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if(pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if(devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount }