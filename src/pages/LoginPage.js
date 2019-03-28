import React from 'react';

import CredentialForm from '../components/CredentialForm';
import { history } from '../routers/AppRouter';

const LoginPage = (props) => (
  <div>
    <h1>Login</h1>

    <CredentialForm
        postUrl='http://localhost:3000/login'
        onSubmit={() => {
            history.push('/profile');
        }}
    />
  </div>
)

export default LoginPage;