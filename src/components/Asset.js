import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const onClick = (e) => {
    // Maybe do something
}

const Asset = (props) => (
    <div>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Text>{props.price}</Card.Text>
                    <Row>
                        <Col sm={8}>
                            <Button
                                variant="primary"
                                onClick={onClick}
                            >Update</Button>
                        </Col>
                        <Col sm={4}>
                            <Button
                                variant="secondary"
                                onClick={onClick}
                            >Delete</Button>
                        </Col>
                    </Row>
                </Card.Body>
        </Card>
    </div>
)

export default Asset;