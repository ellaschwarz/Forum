import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import ForumKit from '../../data/ForumKit';

export default function Comments(props) {
    const [responseData, setResponseData] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })

	const forumKit = new ForumKit();

    const { id, responses } = props.data;
    
    const handleOnClick = () => {
        handleCreateResponse(formData, id);
    }

    const handleCreateResponse = (formData, id) => {
        const payload = {...formData, parent: id}

        forumKit
        .createComment(payload)
        .then(res => res.json())
        .then(data => {
            setResponseData([...responseData, data])
        })
    }

	const fetchResponses = id => {
		if (responses) {
			setResponseData(responses);
			console.log(responses);
		} else {
			forumKit
				.getComments(id)
				.then(res => res.json())
				.then(data => {
                    console.log(data);
                    setResponseData(data);
				});
		}
	};

	useEffect(() => {
		fetchResponses(id);
	}, []);

	return (
		<div>
			<h3>Responses</h3>
			<p>Number of responses: {props.data.countResponses}</p>
			{responseData &&
				responseData.map((response, index) => {
					return (
						<div key={index}>
							<h5>{response.title}</h5>
							<p>{response.content}</p>
						{response.author ? <p>{response.author.email}</p> : ''}
						</div>
					);
                })}
                <CommentForm formData={formData} setFormData={setFormData}/>
                <button onClick={handleOnClick}>Send</button>
		</div>
	);
}
