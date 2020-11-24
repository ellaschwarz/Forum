import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Comments from '../comment/Comments';
import {ContentContainer, CreatedTag, IdTitle, PostDetailContainer, PostDetailItem, PTag, TitleTag, UpdatedTag} from './post.style';

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
			<PostDetailContainer>
			<PostDetailItem>
				{authorCountry ? <p>{authorCountry}</p> : ''}	
				{author ? <p>👤 {author.email}</p> : ''}
				{viewCount ? <PTag> 👀 {viewCount}</PTag> : ''}
				{id ? <IdTitle>{id}. </IdTitle> : ''}
				{title ? <TitleTag>{handleString(title)}</TitleTag> : ''}
				{createdAt ? <CreatedTag>Created at {moment(createdAt).format('DD MMM YYYY (HH:mm)')}</CreatedTag> : ''}
				{updatedAt ? <UpdatedTag>Updated at {moment(updatedAt).format('DD MMM YYYY (HH:mm)')}</UpdatedTag> : ''}
				<ContentContainer>{content ? <p>{handleString(content)}</p> : ''}</ContentContainer>
				{category ? <PTag>{category.title}</PTag> : ''}
				{pinned ? <PTag>📌</PTag> : ''}
				{follow ? <p>FOLLOWING</p> : ''}
			</PostDetailItem>
			{open ? <Comments data={props.postDetailData} /> : 'Comment form is currently closed'}
			</PostDetailContainer>
		</>
	);
}
