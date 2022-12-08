import React from 'react';
import pic1 from'../images/fashion1.jpeg';
import pic2 from '../images/fashion2.jpeg';
import pic3 from '../images/outfit1.jpeg';

export default function Outfit(apps) {

  return (
    <div className='container' style={{backgroundImage:'linear-gradient(180deg,#FFE0B2,#d37bfcea)',width:'100vw'}}>
      <header style={{backgroundColor:"#d37bfcea",height:"200px",display:'flex',alignItems:"center",justifyContent:"center",width:'60%',margin:'5em'}}>
        <h1 style={{color:"linen",fontFamily: 'Trocchi',fontWeight: "bold"}}>Our favorite fashion styles</h1>
      </header>
    
      <div className="container ">
        <div className="row">
        <div className="card justify-content-center">
        <div className="card-body ">
        <img
          className="card-img-top"
          src={pic1}
          alt="Card cap"
          style = {{width:"400px"}}
        />
        <h3 className="card-title" style={{margin:'5em'}}>Little black dress</h3>
        </div>
      </div>
      <div className="card justify-content-center">
        <div className="card-body ">
        <img
          className="card-img-top"
          src={pic2}
          alt="Card cap"
          style = {{width:"400px"}}
        />
        <h3 className="card-title" style={{margin:'5em'}}>Avocado cami top</h3>
        </div>
      </div>
      <div className="card justify-content-center">
        <div className="card-body ">
        <img
          className="card-img-top"
          src={pic3}
          alt="Card cap"
          style = {{width:"400px"}}
        />
        <h3 className="card-title" style={{margin:'5em'}}>That blue sweater</h3>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}