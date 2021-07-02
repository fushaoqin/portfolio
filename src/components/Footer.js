import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="container-fluid flex-grow-0 flex-shrink-1">
                <Row className="border-top justify-content-between p-3">
                    <Col className="pl-5" md={3} sm={12}>
                        Shaoqin Fu
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Shaoqin Fu.
                    </Col>
                </Row>
        </footer>
    );
}

export default Footer;
