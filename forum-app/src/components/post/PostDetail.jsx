import React from 'react';

import Comments from './Comments';

export default function PostDetail(props) {
    const { id, title, content, viewCount, author, createdAt, updatedAt, category } = props.postDetailData;
    
	return (
		<>
			<div>
				{id ? <h1>{id}. </h1> : ''}
				{title ? <h1>{title}</h1> : ''}
				{content ? <p>{content}</p> : ''}
				{category ? <p>{category.title}</p> : ''}
				{viewCount ? <p>Views: {viewCount}</p> : ''}
				{author ? <p>Author {author.email}</p> : ''}
				{createdAt ? <p>Created at {createdAt}</p> : ''}
				{updatedAt ? <p>Updated at {updatedAt}</p> : ''}
			</div>
			<Comments data={props.postDetailData} />
		</>
	);
}
