import React from 'react';
import Physical from "./components/physical/Physical"
import Mental from "./components/mental/Mental"
import "./health.scss"


const Health = () => {
  return (
    <div className="app">
    <div className="sections">
      <Physical/>
     <Mental/> 
    </div>
    </div>
  );
}

export default Health;
