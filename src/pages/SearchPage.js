import React from 'react';

const searchResults = [
    {
        img: 'https://protaxny.com/images/galleries/style/jquery/full-page/examples/imgs/bg3.jpg',
        owner: 'Guy',
        name: 'Item',
        decription: 'An item'
    },
    {
        img: 'https://protaxny.com/images/galleries/style/jquery/full-page/examples/imgs/bg2.jpg',
        owner: 'Guy2',
        name: 'Item2',
        decription: 'An item'
    },
    {
        img: 'https://protaxny.com/images/galleries/style/jquery/full-page/examples/imgs/bg5.jpg',
        owner: 'Guy3',
        name: 'Item3',
        decription: 'An item'
    }
];

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1>Search Results</h1>


            </div>
        )
    }
}