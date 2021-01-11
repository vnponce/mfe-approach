import React, { useEffect, useRef } from 'react';
import { mount } from "auth/AuthApp";
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  // history = copy of the browser history
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // initialPath to avoid click twice signin link
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        // to avoid infinity loop
        const { pathname } = history.location;
        if(pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}