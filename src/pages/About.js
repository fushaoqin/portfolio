import { Figure, Col, Row, Button } from 'react-bootstrap';
import profile from '../images/6.png';
import React from 'react';
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <Row className="justify-content-center pt-5 pb-3">
                <h1 className="display-1 font-weight-bolder">About Me<br/></h1>
            </Row>
            <Row className="justify-content-center pb-lg-5 mb-lg-5 text-black-50">
                <h4>My introduction</h4>
            </Row>
            <Row>
                <Col className="text-right pr-lg-5 mr-lg-5">
                    <Figure>
                    <Figure.Image
                        width={600}
                        height={600}
                        alt="171x180"
                        src={profile}
                    />
                    <Figure.Caption className="blockquote-footer">
                        Always be real and follow your heart.
                    </Figure.Caption>
                    </Figure>
                </Col>
                <Col className="pl-lg-5 ml-lg-5 align-items-center d-flex">
                    <div style={{maxWidth:"600px"}}>
                    <p className="h5" style={{lineHeight:"50px"}}>Inspired software developer currently pursuing Master's degree in Information Science and Technology at Rochester Institute of Technology. Proficient in data algorithms and data structures. Adequate in database management and data analytics. Looking forward for intern opportunities to gain more hands on experience with my knowledge.</p>
                    <Link to='../files/Shaoqin_Fu_Resume.docx' target='_blank' download>
                        <Button size="lg" style={{backgroundColor:"#757a8d", borderColor:"#757a8d",marginTop:"100px"}}>Download CV<i className="far fa-arrow-alt-circle-down ml-2"></i></Button>
                    </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default About;
