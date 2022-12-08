import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs stylesUl">
      {/* <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          id="home"
        >
          Home
        </a>
      </li> */}
      <li className="nav-item">
        <a
          href="#beauty"
          onClick={() => handlePageChange('Beauty')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Beauty' ? 'nav-link active' : 'nav-link'}
          id="beauty"
        >
          Beauty
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#outfit"
          onClick={() => handlePageChange('Outfit')}
          // Check to see if the currentPage is `Application`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Outfit' ? 'nav-link active' : 'nav-link'}
          id="outfit"
        >
          Outfit
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#mentalwear"
          onClick={() => handlePageChange('Mentalwear')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Mentalwear' ? 'nav-link active' : 'nav-link'}
          id="mentalWear"
        >
          Mentalwear
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
