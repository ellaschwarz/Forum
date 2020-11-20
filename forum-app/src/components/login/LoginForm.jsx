import React from 'react';

export default function LoginForm(props) {
	return (
		<>
			<form>
				<label htmlFor='email'></label>
				<input
					type='text'
					name='email'
					placeholder='email@email.com'
					value={props.emailInput}
					onChange={e => props.setEmailInput(e.target.value)}
				></input>
				<input
					type='password'
					placeholder='password123'
					value={props.passwordInput}
					onChange={e => props.setPasswordInput(e.target.value)}
				></input>
			</form>


		</>
	);
}
