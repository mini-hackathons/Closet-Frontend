import React from 'react';
import { history } from '../routers/AppRouter';

export default class VerifyPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    componentDidMount() {
        history.push('/profile');
    }

    render() {
        return (
            <div>
                <h1>Thank you for verifying your account!</h1>
            </div>
        )
    }
}