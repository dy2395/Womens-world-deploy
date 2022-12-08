import React from 'react';
import Auth from '../../utils/auth';


const NightLife = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div>
            <h1 class='text'> logged in and viewing night life content</h1>
          </div>
        )}
        {!loggedIn && (
          <h1 class='text'> logged out and viewing night life content</h1>
        )}
      </div>
    </main>
  );
};

export default NightLife;
