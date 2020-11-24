import React, { useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';

import { ButtonStyle, HomeButton, ListContiner } from '../../components/post/post.style';
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
		<>
			<Link to='/home'>
				{' '}
				<HomeButton>⌂</HomeButton>
			</Link>
			<Link to='/posts/create'>
				{' '}
				<ButtonStyle>✎</ButtonStyle>
			</Link>

			<ListContiner>
				{postData &&
					postData.reverse().map((postItem, index) => {
						return <PostItem key={index} itemData={postItem} />;
					})}
			</ListContiner>
		</>
	);
}
