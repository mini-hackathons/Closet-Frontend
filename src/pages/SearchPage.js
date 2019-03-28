import React from 'react';
import Test from '../components/Test';
import SearchResult from '../components/SearchResult';

import axios from 'axios';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: ''
        };
    }

    async componentDidMount() {
        const searchResults = await axios.get(
            'http://localhost:3000/feed',
            { withCredentials: true });

        console.log(searchResults)
        await this.setState({ searchResults });
    }
    
// searchResults = [
//     {
//         img: 'https://protaxny.com/images/galleries/style/jquery/full-page/examples/imgs/bg3.jpg',
//         owner: 'Guy',
//         name: 'Item',
//         decription: 'An item'
//     },
//     {
//         img: 'https://protaxny.com/images/galleries/style/jquery/full-page/examples/imgs/bg2.jpg',
//         owner: 'Guy2',
//         name: 'Item2',
//         decription: 'An item'
//     },
//     {
//         img: 'https://protaxny.com/images/galleries/style/jquery/full-page/examples/imgs/bg5.jpg',
//         owner: 'Guy3',
//         name: 'Item3',
//         decription: 'An item'
//     }
// ];

    render() {
        return (
            <div>
                <h1>Search Results</h1>
                
                <Test></Test>

            {
                this.state.searchResults &&
                this.state.searchResults.map(result => (
                    <SearchResult
                        owner={result.owner}
                        name={result.name}
                        description={result.description}
                        img={result.img}>
                    </SearchResult>
                ))
            }

            </div>
        )
    }
}