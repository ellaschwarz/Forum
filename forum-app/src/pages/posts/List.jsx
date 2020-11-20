import React, { useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';

import ForumKit from '../../data/ForumKit';
import PostItem from '../../components/post/PostItem';

export default function List() {
	const { postData, setPostData } = useContext(PostContext);
	const forumKit = new ForumKit();

	const fetchPosts = () => {
		forumKit
			.getPosts()
			.then(res => res.json())
			.then(data => {
				setPostData(data.results);
			});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div>
			<Link to='/posts/create'>
				{' '}
				<button>Create new post</button>
			</Link>
			{postData &&
				postData.map((postItem, index) => {
					return <PostItem key={index} itemData={postItem} />;
				})}
		</div>
	);
}
