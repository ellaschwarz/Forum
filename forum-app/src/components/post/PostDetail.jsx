import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Comments from '../comment/Comments';

export default function PostDetail(props) {
	const {
		id,
		title,
		content,
		viewCount,
		author,
		createdAt,
		updatedAt,
		category,
		country,
		userSubscribed,
		isClosed,
		isPinned
	} = props.postDetailData;

	const [follow, setFollow] = useState(false);
	const [pinned, setPinned] = useState(false);
	const [open, setOpen] = useState(true);
	const [authorCountry, setAuthorCountry] = useState('');

	const handleString = string => {
		let handledString = string.replace(/(<([^>]+)>)/gi, ' ');
		return handledString;
	};

	const checkCountry = () => {
		if (country === 1) {
			setAuthorCountry('🇸🇪');
		} else if (country === 2) {
			setAuthorCountry('🇩🇰');
		} else if (country === 3) {
			setAuthorCountry('🇳🇴');
		} else if (country === 4) {
			setAuthorCountry('🇫🇮');
		} else if (country === 5) {
			setAuthorCountry('🇩🇪');
		}
	};

	useEffect(() => {
		if (userSubscribed !== false) {
			setFollow(true);
		}
		if (isPinned !== false) {
			setPinned(true);
		}
		if (isClosed !== false) {
			setOpen(true);
		}
		checkCountry();
	}, []);

	return (
		<>
			<div>
				{id ? <h1>{id}. </h1> : ''}
				{follow ? <h5>FOLLOWING</h5> : ''}
				{pinned ? <p>📌</p> : ''}
				{title ? <h1>{handleString(title)}</h1> : ''}
				{content ? <p>{handleString(content)}</p> : ''}
				{category ? <p>{category.title}</p> : ''}
				{viewCount ? <p>Views: {viewCount}</p> : ''}
				{author ? <p>Author {author.email}</p> : ''}
				{authorCountry ? <p>{authorCountry}</p> : ''}
				{createdAt ? <p>Created at {moment(createdAt).format('DD MMM YYYY (HH:mm)')}</p> : ''}
				{updatedAt ? <p>Updated at {moment(updatedAt).format('DD MMM YYYY (HH:mm)')}</p> : ''}
			</div>
			{open ? <Comments data={props.postDetailData} /> : 'Comment form is currently closed'}
		</>
	);
}
