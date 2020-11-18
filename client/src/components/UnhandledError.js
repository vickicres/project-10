import React from 'react';
import { Link } from 'react-router-dom';

//Display a message letting the user know that an unexpected error has occurred.
export default () => (
  <div className="bounds">
    <h1>Error</h1>
    <p>Sorry! We just encountered an unexpected error.</p>
    <Link className="button button-secondary" to="/">Return to List</Link>
  </div>
);