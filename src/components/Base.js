import React from 'react';
import withFormat from './withFormat';

class Base extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: 'Test'
        }
    }

    onClick = (e) => {
        const formattedText = this.props.format(this.state.text)
        this.setState({ text: formattedText });
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.onClick}>HOC Format</button>
            </div>
        )
    }
}

const BaseWithFormat = withFormat(Base)

export default BaseWithFormat;