import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      Hi there!
      <Link to="/auth/signin">
        Signin
      </Link>
    </>
  );
}
