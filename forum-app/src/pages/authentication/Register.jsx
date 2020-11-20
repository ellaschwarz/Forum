import React, { useState, useEffect } from 'react';

import { useHistory, Link } from 'react-router-dom';

import AuthKit from '../../data/AuthKit';
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

	const authKit = new AuthKit();
	let history = useHistory();

	const handleOnClick = () => {
		handleRegister(formData);
	};

	const handleRegister = formData => {
		authKit
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
		authKit
			.getCountries()
			.then(res => res.json())
			.then(data => setCountries(data.results));
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	return (
		<>
			{console.log(error)}
			{countries && (
				<div>
					<RegisterForm formData={formData} setFormData={setFormData} countries={countries} />

					<button onClick={handleOnClick}>Register</button>
					<Link to='/'>
						{' '}
						<button>Already have an account? Login</button>
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
		</>
	);
}
