import React from 'react';
import Asset from '../components/Asset';
import AssetForm from '../components/AssetForm';
import FadeIn from '../components/FadeIn';
import { history } from '../routers/AppRouter';

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
        try{
            const res = await axios.get(
                'http://localhost:3000/profile',
                { withCredentials: true });

            console.log(res);
            
            const { email, username, inventory } = res.data.data;
            await this.setState({ email, username, inventory });
    
            // console.log(inventory);
            // console.log(this.state.inventory);
    
            this.setState({ loaded: true });
        }catch(err) {
            console.log('Error')
            console.log(err)

            history.push('/login');
        }
    }

    render() {
        const profile = !this.state.loaded ? 
            (
                <div>
                    <h1>Loading</h1>
                </div>
            ) :
            (
                <div>
                    <h2>{this.state.username ? this.state.username : this.state.email}</h2>

                    <FadeIn className='row' cols={3} maxRows={3}>
                    {
                        this.state.inventory.map(asset => {
                            return (
                                <Asset
                                    key={asset._id}
                                    name={asset.name}
                                    description={asset.description}
                                    imageUrl={asset.imageUrl}
                                    price={asset.price}
                                />
                            )
                        })
                    }
                    </FadeIn>
                </div>
            )

        return (
            <div>
                <h1>Profile</h1>
                <AssetForm></AssetForm>

                { profile }
            </div>
        );
    }
}

export default ProfilePage;