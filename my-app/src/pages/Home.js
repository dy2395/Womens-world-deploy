import React from 'react';
import Auth from '../utils/auth';

const Home = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div>
            <h1 class='text'>logged in and viewing home content</h1>
          </div>
        )}
        {!loggedIn && (
          <div>
            <h1 class='text'>logged out and viewing home content</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
