import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext'

import AuthKit from '../../data/AuthKit';
import Form from '../../components/form/Form';
import LoginForm from '../../components/login/LoginForm';
//import Form from '../../components/Form';

export default function Login() {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [token, setToken] = useState(null);
	const [authStatus, setAuthStatus] = useState(false)
	const {setAuth} = useContext(AuthContext);
	// const authKit = new AuthKit();

    let history = useHistory();
    
	const handleOnClick = (e) => {
		e.preventDefault();
		handleLogin(emailInput, passwordInput);
    };
    
	const handleLogin = (email, password) => {
		console.log("enter handleLogin")
		AuthKit
			.login(email, password)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setToken(data.token);
				AuthKit.setToken(data.token);
				if (data.token) {
					setAuth(true)
					history.push('/home');
				} else {
					history.push('/');
					setAuthStatus('Unable to login with provided credentials')
				}
			});
	};

	return (
		<>
			<Form>
				<div>
				<h3>Login to your account</h3>
			<LoginForm
				emailInput={emailInput}
				passwordInput={passwordInput}
				setEmailInput={setEmailInput}
				setPasswordInput={setPasswordInput}
			/>
			<button onClick={handleOnClick}>Login</button>
			<Link to='/register'>
				{' '}
				<p>New here? Register an account</p>
			</Link>
			{authStatus && <p>{authStatus}</p>}
			</div>
			</Form>
		</>
	);
}
