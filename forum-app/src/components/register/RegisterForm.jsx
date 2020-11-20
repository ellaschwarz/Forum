import React from 'react';
import Form from '../form/Form'

export default function RegisterForm(props) {
	const {formData, setFormData, countries} = props;

	const handleOnChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	return (
		<>
			<Form>
				<input
					type='text'
					name='firstName'
					placeholder='Jane'
					value={formData['firstName']}
					onChange={handleOnChange}
					required={true}
				></input>{' '}
				<input
					type='text'
					name='lastName'
					placeholder='Doe'
					value={formData['lastName']}
					onChange={handleOnChange}
					required={true}
				></input>

				<select
					type='text'
					name='country'
					placeholder='Sweden'
					onChange={handleOnChange}
				>
                    {countries.map((country, index) => {
						return <option key={index} value={country.id}>{country.title}</option>
					})}
				</select>{' '}
				
				<input
					type='text'
					name='email'
					placeholder='email@email.com'
					value={formData['email']}
					onChange={handleOnChange}
					required={true}
				></input>
				<input
					type='password'
					name='password'
					placeholder='password123'
					value={formData['password']}
					onChange={handleOnChange}
					required={true}
				></input>
			</Form>
		</>
	);
}
