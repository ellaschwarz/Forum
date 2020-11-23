import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthKit from '../../data/AuthKit';
import { HomeDivStyle, HomeWrapper } from './Home.style';

export default function Home() {
	const [me, setMe] = useState(false);

	//const authKit = new AuthKit();

	const fetchMe = () => {
		AuthKit
			.getMe()
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMe(data);
			});
	};

	useEffect(() => {
		fetchMe();
	}, []);

	return (
		<>
			{me && <h5>Welcome {me.email}!</h5>}
			<HomeWrapper>
				<HomeDivStyle>
					<h1>Ask, talk, discuss. </h1>
					<h1>Hit the button below to get started</h1>

					<Link to='/posts'>
						{' '}
						<button>Get started</button>
					</Link>
				</HomeDivStyle>
			</HomeWrapper>
		</>
	);
}
