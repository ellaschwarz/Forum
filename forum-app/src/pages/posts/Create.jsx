import React, { useState, useEffect, useContext } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';

import ForumKit from '../../data/ForumKit';
import PostForm from '../../components/post/PostForm';

export default function Create() {
	const [categories, setCategories] = useState(false);
	const [error, setError] = useState(false);
	const { postData, setPostData } = useContext(PostContext);

	const [formData, setFormData] = useState({
		title: '',
		content: '',
		category: 1
	});

	const forumKit = new ForumKit();
	let history = useHistory();

	const handleOnClick = () => {
		handleCreatePost(formData);
	};

	const handleCreatePost = formData => {
		forumKit
			.createPost(formData)
			.then(res => res.json())
			.then(data => {
          history.push('/posts');
					setPostData([...postData, formData]);
			});
	};

	const fetchCategories = () => {
		forumKit
			.getCategories()
			.then(res => res.json())
			.then(data => setCategories(data.results));
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<>
    			<Link to='/posts'>
				{' '}
				<button>Back</button>
			</Link>
			{categories && (
				<div>
					<PostForm formData={formData} setFormData={setFormData} categories={categories} setError={setError} />
					<button onClick={handleOnClick}>Post</button>
				</div>
			)}
		</>
	);
}
