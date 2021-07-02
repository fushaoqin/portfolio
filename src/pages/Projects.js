import { Card, Button, Row, Col, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React, { useState } from 'react';
import thumbnail1 from '../images/project1.jpg';
import demo from '../images/todo_demo.gif';

function Projects() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Row className="justify-content-center pt-5 pb-3">
                <h1 className="display-1 font-weight-bolder">My Projects<br/></h1>
            </Row>
            <Row className="justify-content-center pb-lg-5 mb-lg-5 text-black-50">
                <h4>Completed projects</h4>
            </Row>
            <Row className="mt-lg-4 pt-lg-5 justify-content-center">
                <Col className="d-flex justify-content-center">
                <OverlayTrigger
                placement="right"
                overlay={
                    <Tooltip>
                    Click on the image for a preview
                    </Tooltip>
                }
                >
                    <Card className="shadow" style={{ width: '360px', borderRadius:"10px", overflow:"hidden",minHeight:"500px" }}>
                        <Card.Img variant="top" src={thumbnail1} onClick={handleShow}/>
                        <Card.Body style={{position:"absolute",bottom:"0"}}>
                            <Card.Title>Todo App</Card.Title>
                            <Card.Text>
                            A simple todo app incoporating user authentication functonality through Firebase cloud functions.
                            </Card.Text>
                            <Button href="https://github.com/fushaoqin/todo.git" target="_blank" rel="noreferrer" style={{backgroundColor:"#757a8d", borderColor:"#757a8d"}}>View on Github</Button>
                        </Card.Body>
                    </Card>
                    </OverlayTrigger>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} centered>
                    <img src={demo} alt="demo" style={{minWidth:"700px"}}/>
            </Modal>
        </div>
    );
}

export default Projects;