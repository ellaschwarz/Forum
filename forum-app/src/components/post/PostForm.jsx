import React from 'react';

export default function PostForm(props) {
	const { categories, formData, setError, setFormData } = props;

	const handleOnChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError(false);
	};

	return (
		<>
			<form>
				<input type='text' name='title' placeholder='Title' value={formData['title']} onChange={handleOnChange}></input>{' '}
				<textarea
					type='text'
					name='content'
					placeholder='Write your post'
					value={formData['content']}
					onChange={handleOnChange}
					required={true}
				></textarea>
				<select type='text' name='category' placeholder='Choose a category' onChange={handleOnChange} required={true}>
					{categories.map((category, index) => {
						return (
							<option key={index} value={category.id}>
								{category.title}
							</option>
						);
					})}
				</select>{' '}
			</form>
		</>
	);
}
