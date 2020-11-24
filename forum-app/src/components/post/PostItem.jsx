import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { PostContainer, PostInfo, PostTitle, PostTitleContainer } from './post.style';

export default function PostItem(props) {
	let id = props.itemData.id;

	const { author, countResponses, createdAt, title, viewCount, isPinned } = props.itemData;

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
					</Link>
				</PostTitleContainer>
				{author ? <p>Written by: {author.email}</p> : ''}
				<p>✏️ {moment(createdAt).format('DD MMM YYYY (HH:mm) ')}</p>
				<PostInfo>
					{isPinned ? <p>📌</p> : ''}
					<p>👀 {viewCount}</p>
					<p>💬 {countResponses}</p>
				</PostInfo>
			</PostContainer>
		</>
	);
}
