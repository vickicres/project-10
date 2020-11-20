import React from 'react';
import { Link } from 'react-router-dom';

//Displays a message letting the user know that they can't delete the page if they not the current user.
export default () => (
  <div className="bounds">
    <h1>Course delete unsuccessful!</h1>
    <p>OOps... Looks like you don't have access to delete this page.</p>
    <Link className="button button-secondary" to="/">Return to List</Link>
  </div>  
);