import React, { useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { send } from 'emailjs-com';

function Contact() {

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();

        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_USER_ID
        )
            .then((res) => {
                //console.log('SUCCESS!', res.status, res.text);
                window.location.reload();
            })
            .catch((err) => {
                console.log('FAILED...', err);
            })
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Row className="justify-content-center pt-5 pb-3">
                <h1 className="display-1 font-weight-bolder">LET'S TALK<br/></h1>
            </Row>
            <Row className="justify-content-center pb-lg-5 mb-lg-5 text-black-50">
                <h4>Get in touch</h4>
            </Row>
            <Row className="mt-lg-4 pt-lg-5 justify-content-center">
                <Container fluid style={{maxWidth:"1580px", display:"flex"}}>
                <Col className="d-flex flex-column">
                    <Row>
                        <Col className="d-flex mt-5">
                            <i className="bi bi-phone-vibrate fa-3x m-lg-4"></i>
                            <div className="d-flex" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h1 className="font-weight-normal">Call Me<h4 style={{color:"#c7c6c5", fontWeight:"normal"}}>530-761-6527</h4></h1> 
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex">
                            <i class="bi bi-envelope fa-3x m-lg-4"></i>
                            <div className="d-flex" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h1 className="font-weight-normal">Email<h4 style={{color:"#c7c6c5", fontWeight:"normal"}}>fushaoqin321@gmail.com</h4></h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex">
                            <i class="bi bi-geo-alt fa-3x m-lg-4"></i>
                            <div className="d-flex" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h1 className="font-weight-normal">Location<h4 style={{color:"#c7c6c5", fontWeight:"normal"}}>183 E Main Street, Rochester, NY</h4></h1>
                            </div>      
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Form onSubmit={onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter your name" size="lg" value={toSend.name} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Email address" size="lg" value={toSend.email} onChange={handleChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control name="subject" type="text" placeholder="Subject text" size="lg" value={toSend.subject} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} name="message" type="text" placeholder="Enter your message here" size="lg" value={toSend.message} onChange={handleChange}/>
                        </Form.Group>

                        <Button type="submit"  size="lg" style={{backgroundColor:"#757a8d", borderColor:"#757a8d"}}>
                            Submit
                        </Button>
                    </Form>
                </Col> 
                </Container>          
            </Row>
    
        </div>
    );
}

export default Contact;
