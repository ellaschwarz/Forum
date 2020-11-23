import React, { useState, useEffect } from 'react';

import { useHistory, Link } from 'react-router-dom';

import AuthKit from '../../data/AuthKit';
import Form from '../../components/form/Form';
import RegisterForm from '../../components/register/RegisterForm';

export default function Register() {
	const [countries, setCountries] = useState(false);
	const [error, setError] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		password: '',
		country: 1
	});

	let history = useHistory();

	const handleOnClick = (e) => {
		e.preventDefault();
		handleRegister(formData);
	};

	const handleRegister = formData => {
		AuthKit
			.register(formData)
			.then(res => res)
			.then(data => {
				if (data.status === 201) {
					history.push('/');
				} else {
					data.json().then(data => {
						setError(data);
					});
				}
			});
	};

	const fetchCountries = () => {
		AuthKit
			.getCountries()
			.then(res => res.json())
			.then(data => setCountries(data.results));
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	return (
		<>
			<Form>
			{countries && (
				<div>
					<h3>Create an account to get started</h3>
					<RegisterForm formData={formData} setFormData={setFormData} countries={countries} />

					<button onClick={handleOnClick}>Register</button>
					<Link to='/'>
						{' '}
						<p>Already have an account? Login</p>
					</Link>
					{error &&
						Object.entries(error).map((err, index) => {
							return (
								<p key={index}>
									{err[0].toUpperCase()}: {err[1]}
								</p>
							);
						})}
				</div>
			)}
			</Form>
		</>
	);
}
