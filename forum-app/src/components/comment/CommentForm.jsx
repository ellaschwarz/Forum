import React from 'react';
//import Form from '../form/Form'

import {CommentFormDivStyle, FormStyle} from '../form/Form.style'
export default function CommentForm(props) {
	const { formData, setFormData } = props;

	const handleOnChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		
			<CommentFormDivStyle>
			<FormStyle>
				<input
					type='text'
					name='title'
					value={formData['title']}
					onChange={handleOnChange}
					placeholder='Title'
					required={true}
				/>{' '}
				<input
					type='text'
					name='content'
					value={formData['content']}
					onChange={handleOnChange}
					placeholder='Write your response ... '
					required={true}
				/>
				{props.children}
			</FormStyle>
			</CommentFormDivStyle>

		
	);
}
