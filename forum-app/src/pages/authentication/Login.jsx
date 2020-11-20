import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import AuthKit from '../../data/AuthKit';
import LoginForm from '../../components/login/LoginForm';
//import Form from '../../components/Form';

export default function Login() {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [token, setToken] = useState(null);
	const [authStatus, setAuthStatus] = useState(false)
	const authKit = new AuthKit();

    let history = useHistory();
    
	const handleOnClick = () => {
		handleLogin(emailInput, passwordInput);
    };
    
	const handleLogin = (email, password) => {
		authKit
			.login(email, password)
			.then(res => res.json())
			.then(data => {
				setToken(data.token);
				authKit.setToken(data.token);
				if (data.token) {
					history.push('/home');
				} else if(!data.token) {
					setAuthStatus('Unable to login with provided credentials')
				}
			});
	};

	return (
		<>
			<p>This is login</p>
			<LoginForm
				emailInput={emailInput}
				passwordInput={passwordInput}
				setEmailInput={setEmailInput}
				setPasswordInput={setPasswordInput}
			/>
			<button onClick={handleOnClick}>Login</button>
			<Link to='/register'>
				{' '}
				<button>New here? Register an account</button>
			</Link>
			{authStatus && <p>{authStatus}</p>}
		</>
	);
}
