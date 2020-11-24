import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { PostContainer, PostInfo, PostTitle, PostTitleContainer } from './post.style';

export default function PostItem(props) {
	let id = props.itemData.id;

	const { author, countResponses, createdAt, isPinned, title, viewCount } = props.itemData;

	const history = useHistory()

	const handleString = string => {
		let handledString = string.replace(/(<([^>]+)>)/gi, ' ');
		return handledString.substring(0, 200);
	};

	const handleOnClick = () => {
		history.push(`/posts/${id}`)
	}

	return (
		<>
			<PostContainer onClick={handleOnClick}>
				<PostTitleContainer>
						<PostTitle>{handleString(title)}</PostTitle>
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
