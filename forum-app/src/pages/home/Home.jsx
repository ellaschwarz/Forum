import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import AuthKit from '../../data/AuthKit';

export default function Home() {

    const [me, setMe] = useState(false)

    const authKit = new AuthKit();

	const fetchMe = () => {
		authKit
			.getMe()
			.then(res => res.json())
			.then(data => {
                console.log(data)
                setMe(data)
            })
	};

	useEffect(() => {
		fetchMe();
	}, []);

    return (
        <div>
             {me && <p>{me.email}</p>} 
            <h1>Ask, talk, discuss, hit the button below to get started</h1>
            
            <Link to='/posts'>
				{' '}
				<button>Get started</button>
			</Link>
        </div>
    )
}
