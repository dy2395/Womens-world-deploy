import React,  { useState } from 'react';
import Auth from '../../utils/auth';
import NavTabs from './NavTabs';
import Beauty from './subpages/Beauty';
import Outfit from './subpages/Outfit';
import Mentalwear from './subpages/Mentalwear';
import pic from "./images/group-of-women.jpeg";

const Style = () => {

  const loggedIn = Auth.loggedIn();
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    if (currentPage === 'Mentalwear') {
      return <Mentalwear />;
    }
    if (currentPage === 'Beauty') {
      return <Beauty />;
    }
    if (currentPage === 'Outfit') {
      return <Outfit />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <div>
        {loggedIn && (
        <>
          <h1 className='text'>Welcome to Style Page!</h1>
          <div className='container justify-content-center'>
            <img
                className="rounded float-right"
                src={pic}
                alt="Card cap"
                style={{ width:'500px'}}
              />
              <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> 
              {renderPage()}
          </div>
        </> 
        )}
        {!loggedIn && (
          <>
          <h1 className='text'> Please log in!</h1>
          <div className="container justify-content-center">
            <img
                className="rounded float-right"
                src={pic}
                alt="Card cap"
                style={{ width:'500px'}}
              />
              <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> 
              {renderPage()}
          </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Style;
