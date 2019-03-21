import React from 'react';

import CredentialForm from '../components/CredentialForm';

const LoginPage = (props) => (
  <div>
    <h1>Login</h1>

    <CredentialForm postUrl='http://localhost:3000/login'/>
  </div>
)

export default LoginPage;