import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>

      <h1>My name is Alice</h1>
      <Link to='/Search'>
      <p>I am still a student.</p>
      </Link>
    </div>
  );
}

export default Profile;
