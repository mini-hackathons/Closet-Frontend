import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ImageDrop from './ImageDrop';

import axios from 'axios';

/**
 * 
 */
export default class AssetForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            price: '',
            image: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({ name });
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    }
    onPriceChange = (e) => {
        const price = e.target.value;
        this.setState({ price });
    }
    onImageDrop = (imageList) => {
        const image = imageList[0];
        this.setState({ image });
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        e.stopPropagation();

        let data = new FormData();
        data.append('name', this.state.name);
        data.append('description', this.state.description);
        data.append('price', this.state.price);
        data.append('file', this.state.image);

        try {
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:3000/create-asset',
                data,
                withCredentials: true
            });
            
            console.log(this.state.image);

            // this.props.onSubmit();
        }catch(err) {
            console.log("Error");
            console.log(err);
        }
    }

    render() {
        return (
            <Form
                onSubmit={e => this.handleSubmit(e)}
            >
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                    Name of Asset
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            onChange={this.onNameChange}
                            placeholder="Asset name..."
                            value={this.state.name}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDescription">
                    <Form.Label column sm={2}>
                    Description
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            onChange={this.onDescriptionChange}
                            placeholder="Description"
                            value={this.state.description}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPrice">
                    <Form.Label column sm={2}>
                    Price
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="number"
                            min="0"
                            step="0.01"
                            onChange={this.onPriceChange}
                            placeholder="Asset price"
                            value={this.state.price}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPrice">
                    <Form.Label column sm={2}>
                        Image
                    </Form.Label>

                    <ImageDrop
                            onDrop={this.onImageDrop}
                    />
                </Form.Group>


                {/* <Form.Group action="/api/upload" method="POST" class="image-form">
                        <input id="image-upload" class="file-add" type="file" accept="image/*" name="imageUpload"/>
                        <button type="submit" id="image-upload" class="sinsup-button">Upload Image</button>
                </Form.Group> */}

                <Form.Group as={Row}>
                    <Col>
                        <Button type="submit">Add Asset</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}