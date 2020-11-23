import React from 'react';
//import Form from '../form/Form'

export default function RegisterForm(props) {
	const {formData, setFormData, countries} = props;

	const handleOnChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	return (
		<>
				<label htmlFor='firstName'>First name</label>
				<input
					type='text'
					name='firstName'
					placeholder='Enter your first name'
					value={formData['firstName']}
					onChange={handleOnChange}
					required={true}
				></input>{' '}
				<label htmlFor='lastName'>Last name</label>
				<input
					type='text'
					name='lastName'
					placeholder='Enter your last name'
					value={formData['lastName']}
					onChange={handleOnChange}
					required={true}
				></input>
				<label htmlFor='country'>Country</label>
				<select
					type='text'
					name='country'
					placeholder='Select country from the list'
					onChange={handleOnChange}
				>
                    {countries.map((country, index) => {
						return <option key={index} value={country.id}>{country.title}</option>
					})}
				</select>{' '}
				<label htmlFor='email'>Email</label>				
				<input
					type='text'
					name='email'
					placeholder='Enter your email'
					value={formData['email']}
					onChange={handleOnChange}
					required={true}
				></input>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					placeholder='Choose a strong password'
					value={formData['password']}
					onChange={handleOnChange}
					required={true}
				></input>
		</>
	);
}
