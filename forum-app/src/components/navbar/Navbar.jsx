import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import AuthKit from '../../data/AuthKit';
import { NavOuterDiv, Logo, LogoutButton, UserTag } from './Navbar.style';

export default function Navbar() {
	const { auth, setAuth } = useContext(AuthContext);
	const [me, setMe] = useState(false);

	const fetchMe = () => {
		AuthKit.getMe()
			.then(res => res.json())
			.then(data => {
				setMe(data);
			});
	};

	useEffect(() => {
			if(auth) {
				fetchMe();
			}
	}, [auth]);

	const handleLogout = () => {
		AuthKit.removeToken();
		setAuth(false);
	};

	return (
		<>
			<NavOuterDiv>
				{auth && (
					<Link to='/' onClick={handleLogout}>
						<LogoutButton>
							<h5>Sign out</h5>
						</LogoutButton>
					</Link>
				)}
				{auth && me ? <UserTag>Welcome {me.firstName}!</UserTag> : ''}
				<Logo>FORUM</Logo>
			</NavOuterDiv>
		</>
	);
}
