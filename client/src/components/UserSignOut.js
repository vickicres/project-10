import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// it signs out the authenticated user and redirects the user to the default route
export default ({context}) => {
  useEffect(() =>  context.actions.signOut());
  return (
    <Redirect to="/" />
  );
}