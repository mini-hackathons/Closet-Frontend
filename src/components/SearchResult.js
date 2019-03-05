import React from 'react';
import { Button, Card } from 'react-bootstrap';

const onClick = (e) => {
    // Maybe do something
}

const SearchResult = (props) => (
    <div>
        <h1>Hi</h1>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button
                    variant="primary"
                    onClick={onClick}
                >Rent this!</Button>
            </Card.Body>
        </Card>
    </div>
)

export default SearchResult;