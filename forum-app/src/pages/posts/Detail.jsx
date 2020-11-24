import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { ButtonStyle } from '../../components/post/post.style';
import ForumKit from '../../data/ForumKit';
import PostDetail from '../../components/post/PostDetail';

export default function Detail(props) {
	const [postDetailData, setPostDetailData] = useState(false);

	const forumKit = new ForumKit();
	const id = props.match.params.id;

	const fetchSinglePost = id => {
		forumKit
			.getSinglePost(id)
			.then(res => res.json())
			.then(data => {
				setPostDetailData(data);
			});
	};

	useEffect(() => {
		fetchSinglePost(id);
	}, []);

	return (
		<>
			<Link to='/posts'>
				{' '}
				<ButtonStyle>⇤</ButtonStyle>
			</Link>
			<Link to='/posts/create'>
				{' '}
				<ButtonStyle>✎</ButtonStyle>
			</Link>
			{postDetailData && <PostDetail postDetailData={postDetailData} />}
		</>
	);
}
