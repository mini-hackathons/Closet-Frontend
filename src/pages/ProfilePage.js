import React from 'react';
import Asset from '../components/Asset';

import axios from 'axios';

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loaded: false,
            email: '',
            username: '',
            inventory: []
        }
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:3000/profile', { withCredentials: true });
        const { email, username, inventory } = res.data.data;
        await this.setState({ email, username, inventory });

        console.log(inventory)
        console.log(this.state.inventory)

        this.setState({ loaded: true })
    }

    render() {
        const jsx = !this.state.loaded ? 
            (
                <div>
                    <h1>Waiting</h1>
                </div>
            ) :
            (
                <div>
                    <h1>Profile</h1>
                    <h2>{this.state.username ? this.state.username : this.state.email}</h2>

                    {
                        this.state.inventory.map(asset =>
                            <Asset
                                name={asset.name}
                                description={asset.description}
                                imageUrl={asset.imageUrl}
                                price={asset.price}
                            />
                        )
                    }
                </div>
            )

        return jsx;
    }
}

export default ProfilePage;