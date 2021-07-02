import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import sketch from '../images/sketch1.jpg';

function Home() {
    return (
        <div>
            <Row className="pt-5 pb-lg-5 justify-content-center align-items-center">
                <h1 className="display-1 font-weight-bolder">Keep IT Real</h1>
            </Row>
            <Row className="" >
                <Col sm={2} className="d-flex flex-column justify-content-center align-items-center">
                        <a href="https://github.com/fushaoqin" style={{color:"#757a8d"}} target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x mb-4"></i></a>
                        <a href="https://www.linkedin.com/in/sfdz0309" style={{color:"#757a8d"}} target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x mt-4"></i></a>
                </Col>
                <Col sm={4} className="d-flex flex-column justify-content-center align-items-center">
                    
                    <div> 
                        <h1 className="display-3 font-weight-bolder">Hi, I'm Shaoqin</h1><br/><h2 className="display-4">Software developer</h2><br/>
                        <p>Full-stack knowledge and experience to build interactive and user-centered website designs to scale. 
                            Extensive expertise in database design and management, as well as data visualization and big data analytics.</p>
                        <Button href="/contact" style={{backgroundColor:"#757a8d", borderColor:"#757a8d"}}>Contact Me <i class="far fa-paper-plane"></i></Button>
                    </div>
                </Col>
                <Col sm={6} className="d-flex justify-content-center align-items-center p-5">
                    <img src={sketch} className="thumbnail img-fluid" alt="profile" style={{maxHeight:"800px"}}/>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
