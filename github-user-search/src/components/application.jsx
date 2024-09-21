import React from 'react';
import { Link } from 'react-router-dom';

function Application() {
  return (
    <div>
      <h1>Welcome to the Application</h1>
      <Link to='/introduction'>
      <p>This is a simple functional component in React.</p>
      </Link>
      
    </div>
  );
}

export default Application;
