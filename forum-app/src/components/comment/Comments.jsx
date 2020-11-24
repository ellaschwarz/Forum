import React, { useState, useEffect } from 'react';
import moment from 'moment';

import {
	CommentAuthor,
	CommentButton,
	CommentContainer,
	CommentDiv,
	CommentPageContainer,
	CommentTime,
	CommentTitle
} from './comment.style';
import CommentForm from './CommentForm';
import ForumKit from '../../data/ForumKit';

export default function Comments(props) {
	const [responseData, setResponseData] = useState(false);
	const [formData, setFormData] = useState({
		title: '',
		content: ''
	});

	const forumKit = new ForumKit();

	const { id, responses } = props.data;

	const handleOnClick = () => {
		handleCreateResponse(formData, id);
	};

	const handleCreateResponse = (formData, id) => {
		const payload = { ...formData, parent: id };

		forumKit
			.createComment(payload)
			.then(res => res.json())
			.then(data => {
				setResponseData([...responseData, data]);
			});
	};

	const fetchResponses = id => {
		if (responses) {
			setResponseData(responses);
		} else {
			forumKit
				.getComments(id)
				.then(res => res.json())
				.then(data => {
					setResponseData(data);
				});
		}
	};

	useEffect(() => {
		fetchResponses(id);
	}, []);

	return (
		<CommentPageContainer>
			<CommentContainer>
				<p> 💬 {props.data.countResponses} replies</p>
				{responseData &&
					responseData.reverse().map((response, index) => {
						return (
							<CommentDiv key={index}>
								{response.author ? <CommentAuthor>{response.author.email} 👤</CommentAuthor> : ''}
								<CommentTime>{moment(response.createdAt).format('DD-MM-YYYY (HH:mm)')} 🕒</CommentTime>
								<CommentTitle>{response.title}</CommentTitle>
								<p>{response.content}</p>
							</CommentDiv>
						);
					})}
			</CommentContainer>
			<CommentForm formData={formData} setFormData={setFormData}>
				<CommentButton onClick={handleOnClick}>⌲</CommentButton>
			</CommentForm>
		</CommentPageContainer>
	);
}
