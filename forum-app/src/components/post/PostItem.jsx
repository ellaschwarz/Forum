import React from 'react'
import {Link} from 'react-router-dom';

export default function PostItem(props) {
    let id = props.itemData.id;

    return (
        <>
        <Link to={`/posts/${id}`}>
        {' '}
        <h3>{props.itemData.title}</h3>
        </Link>
        <p>{props.itemData.content}</p>
       
        </>
    )
}
