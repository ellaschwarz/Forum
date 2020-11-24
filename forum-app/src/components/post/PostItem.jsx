import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { PostContainer, PostTitleContainer, PostTitle, PostInfo } from './post.style';

export default function PostItem(props) {
	let id = props.itemData.id;

	const { author, countResponses, createdAt, title, viewCount} = props.itemData;

	console.log(props);

	const handleString = string => {
		let handledString = string.replace(/(<([^>]+)>)/gi, ' ');
		return handledString.substring(0, 200);
	};

	return (
		<>
			<PostContainer>
                <PostTitleContainer>
				<Link to={`/posts/${id}`}>
					{' '}
					<PostTitle>{handleString(title)}</PostTitle>
					{/* <p>{handleString(props.itemData.content)} ... READ MORE</p> */}
				</Link>
                </PostTitleContainer>
                <p>{author.email}</p>
				<p>✏️ {moment(createdAt).format('DD MMM YYYY (HH:mm) ')}</p>
                <PostInfo>
				<p>👀 {viewCount}</p>
				<p>💬 {countResponses}</p>
                </PostInfo>
			</PostContainer>
		</>
	);
}
