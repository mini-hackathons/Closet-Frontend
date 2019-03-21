import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import axios from 'axios';

/**
 * Props
 *  postUrl- Url to send credentials to
 */
export default class CredentialForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState({ username });
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const response = await axios({
                method: 'POST',
                url: this.props.postUrl,
                data: {
                    username: this.state.username,
                    password: this.state.password
                },
                headers: {
                  'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            
            console.log(response);
        }catch(err) {
            console.log(err);
        }

    }

    render() {
        return (
            <Form
                onSubmit={e => this.handleSubmit(e)}
            >
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            onChange={this.onUsernameChange}
                            placeholder="Username / Email"
                            value={this.state.username}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="password"
                            onChange={this.onPasswordChange}
                            placeholder="Password"
                            value={this.state.password}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}