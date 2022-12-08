import React from 'react';
import pic1 from "../images/quote1.jpeg";
import pic2 from "../images/quote2.jpeg";
import pic3 from "../images/quote3.jpeg";
import YoutubeEmbed from "../utils/YoutubeEmbed";

export default function Mentalwear() {
  return (
    <div className='container d-flex' style={{backgroundImage:'linear-gradient(180deg,#FFE0B2,#d37bfcea)',width:'100vw'}}>
        <header style={{backgroundColor:"#d37bfcea",height:"200px",display:'flex',alignItems:"center",justifyContent:"center",width:'60%',margin:'5em'}}>
          <h1 style={{color:"linen",fontFamily: 'Trocchi',fontWeight: "bold"}}>Let's face them together</h1>
        </header>

        <div className="d-flex flex-row justify-content-between cd-12" >
        
          <div key="1" className="cd-sm-4 justify-content-center">
          <div className="card" style={{backgroundColor:"transparent",width:"82%",border:'solid 5px',margin:'5em'}}>
          <div className="card-body">
          <h1 className="card-title m-5">
            <a 
            href="https://www.etrevous.com/blogs/health/wellness/the-rise-in-facial-dysmorphia-and-appearance-anxiety" 
            target="_blank" rel="noopener noreferrer"
            style={{textDecoration: "none", color:"black",fontStyle:"none",margin:'2em'}}>
            Appearance anxiety?</a></h1>
            <h3 className="card-text m-5">
              <a 
              href="https://www.thewonderforest.com/3-ways-reject-appearance-pressure/" 
              target="_blank" rel="noopener noreferrer"
              style={{color:"#d37bfcea",margin:'2em'}}>
              3 ways to reject appearance pressure
            </a></h3>
          </div>
          <img
            className="img-fluid"
            src={pic2}
            alt="Card cap"
            style={{ width:"100%",margin:'2em'}}
          />   
          </div>
          </div>

          <div key="2" className="cd-sm-4">
          <div className="card" style={{backgroundColor:"transparent",width:"82%",border:'solid 5px',margin:'5em'}}>
          <div className="card-body">
          <h1 className="card-title m-4">
            <a 
            href="https://www.bridgestorecovery.com/social-anxiety/causes-social-anxiety/" 
            target="_blank" rel="noopener noreferrer"
            style={{textDecoration: "none",color:"black",fontStyle:"none",margin:'2em'}}>
            Society anxiety?</a></h1>
            <h3 className="card-text m-5">
              <a 
              href="https://health.clevelandclinic.org/how-to-overcome-social-anxiety/" 
              target="_blank" rel="noopener noreferrer"
              style={{color:"#d37bfcea",margin:'2em'}}>
              6 tips to overcome social anxiety
            </a></h3>
          </div>
          <img
            className="img-fluid"
            src={pic1}
            alt="Card cap"
            style={{ width: "100%", margin:'2em'}}
          />
          </div>
          </div>

          <div key="3" className="cd-sm-4">
          <div className="card" style={{backgroundColor:"transparent",width:"82%",border:'solid 5px',margin:'5em'}}>
          
          <div className="card-body">
            <h1 className="card-title m-4">
              <a 
              href="https://www.medicalnewstoday.com/articles/dating-anxiety#speaking-with-a-doctor" 
              target="_blank" rel="noopener noreferrer"
              style={{textDecoration: "none",color:"black",fontStyle:"none",margin:'2em'}}>
              Dating anxiety?</a></h1>
              <h3 className="card-text m-5">
                <a 
                href="https://www.wikihow.com/Deal-with-Dating-Anxiety" 
                target="_blank" rel="noopener noreferrer"
                style={{color:"#d37bfcea",margin:'2em'}}>
                3 easy ways to deal with dating anxiety
              </a></h3>
            </div>
            <img
              className="img-fluid"
              src={pic3}
              alt="Card cap"
              style={{ width:"100%", margin:'2em'}}
            />
            </div>
            </div>
          </div>

      <div className="d-flex flex-row">
        <div className='card' style={{
        display:'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'50vw',
        height:'100vh',
        margin:'5em',
        border:'solid 5px',
        backgroundColor:"transparent"
        }}>
          <h1 style={{color:"linen",margin:'2em'}}>“Dear Young Woman”: a poem of empowerment</h1> 
          <YoutubeEmbed embedId="adUToRtRkaY"/>
        </div>
      </div>
    </div>

  );
}
