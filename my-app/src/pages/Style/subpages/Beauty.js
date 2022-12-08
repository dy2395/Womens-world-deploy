import React, { useState} from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
  CardHeader,
  Button
} from 'reactstrap';
import Form from 'react-bootstrap/Form'
import pic1 from '../images/makeup4.jpeg'
import pic2 from '../images/skincare1.jpeg'
import pic3 from '../images/skincare2.jpeg'

import {fetchMakeup} from '../utils/API';

export default function Beauty() {
  const [searchedMakeup, setSearchedMakeup] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
  
    try {
      const response = await fetchMakeup(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const products = await response.json();

      const makeupData = products.map((makeup) => ({
        id: makeup.id,
        brand: makeup.brand.charAt(0).toUpperCase() + makeup.brand.slice(1),
        name: makeup.name,
        description: makeup.description,
        link: makeup.product_link,
        image: makeup.image_link
      }));

      setSearchedMakeup(makeupData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }

  };

  return (
    <div className='container' style={{backgroundImage:'linear-gradient(180deg,#FFE0B2,#d37bfcea)',width:'100vw'}}>
      <header style={{backgroundColor:"#d37bfcea",height:"200px",display:'flex',alignItems:"center",justifyContent:"center",width:'60%',margin:'5em'}}>
        <h1 style={{color:"linen",fontFamily: 'Trocchi',fontWeight: "bold"}}>Explore best beauty products</h1>
      </header>

      <Row className="d-flex flex-row justify-content-between">
      
        <Col key="1" className="col-sm-7 justify-content-center">

        <div className="card" style={{backgroundColor:"transparent",border:'solid 5px',margin:'5em'}}>
        <div className="card-body">
        <img
          className="img-fluid"
          src={pic2}
          alt="Card cap"
          style={{ width:"550px",margin:'2em'}}
        />   
        <h1 className="card-title m-4">
          <a 
          href="https://www.allure.com/best-of-beauty-2022-winners" 
          target="_blank" rel="noopener noreferrer"
          style={{textDecoration: "none", color:"black",fontStyle:"none",margin:'2em'}}>
          Best of beauty 2022 by allure</a></h1>
        </div>
      </div>
      <div className="card" style={{backgroundColor:"transparent",border:'solid 5px',margin:'5em'}}>
        
        <div className="card-body">
        <img
          className="img-fluid"
          src={pic3}
          alt="Card cap"
          style={{ width:"450px",margin:'2em'}}
        />
        <h1 className="card-title m-4">
          <a 
          href="https://www.vogue.com/article/best-skin-care-face-products-vogue-editors"
          target="_blank" rel="noopener noreferrer"
          style={{textDecoration: "none",color:"black",fontStyle:"none",margin:'2em'}}>
            46 hero skin-care products by Vogue </a></h1>
        </div>
        
      </div>
      </Col>
      <Col key="2" className="col-md-5">
        <div className="card" style={{backgroundColor:"transparent",border:'solid 5px',margin:'5em'}}>
        <div className="card-body">
        <img
          className="img-fluid"
          src={pic1}
          alt="Card cap"
          style={{ width: '500px',margin:'2em'}}
        />
        <h1 className="card-title m-4">
          <a 
          href="https://www.sephora.com/beauty/best-makeup-brands" 
          target="_blank" rel="noopener noreferrer"
          style={{textDecoration: "none",color:"black",fontStyle:"none",margin:'2em'}}>
          5 Best Makeup Brands in 2022 by Sephora</a></h1>
        </div>
      </div>
      </Col>
      </Row>

      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body inverse style={{ backgroundColor: 'transparent',border:'solid 5px',margin:'5em'}}>
            <CardBody>
              <CardHeader tag="h1" style={{color:"linen",margin:'1.5em'}}>Search for a makeup product:</CardHeader>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                  <Form.Control 
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    style={{ backgroundColor: 'linen', width:'50vw',height:'3em',margin:'3em'}}
                  />
                <Button className="button-56" style={{ backgroundColor: 'linen',margin:'3em',float:'right'}} type="submit">
                  Find
                </Button>
                </Form.Group>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row >
      {searchedMakeup.length > 0 ? (<Row fluid="ture">
      {searchedMakeup.map((makeup) => {
                    return (
                      <Col key={makeup.id} md={4}>
                      <Card style={{ backgroundColor: 'transparent',border:'solid 5px',margin:'5em',display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                        {makeup.image ? (
                          <CardImg src={makeup.image} 
                          alt={`Image for ${makeup.brand} - ${makeup.name}`} 
                          top
                          style={{width:'200px',margin:'2em'}}
                          onError={(event)=>{
                            event.target.parentElement.parentElement.style.display = 'none'
                          }} />
                        ) : null}
                        <CardBody>
                          <CardTitle>{makeup.brand} - {makeup.name}</CardTitle>
                          <p className='small'> Description: {makeup.description}</p>
                          <CardText><a 
                          target="_blank" rel="noopener noreferrer"
                          style={{backgroundColor:'black', padding:'0.1em'}} href={makeup.link}> Check out this product </a></CardText>
                        </CardBody>
                      </Card>
                      </Col>
                    )
                  })}
                </Row>): <Row fluid="ture"><h3 style={{margin:'2em',textAlign:"center"}}>Sorry products missing, please try another one. We have lipstick, eyeshadow etc. :P </h3></Row>}

    </div>
  );
}


