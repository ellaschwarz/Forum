import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';

import {AuthContext} from '../../contexts/AuthContext'
import AuthKit from '../../data/AuthKit';
import { NavOuterDiv } from './Navbar.style';

export default function Navbar(props) {
  const {auth} = props;
  const {setAuth} = useContext(AuthContext);
	const [me, setMe] = useState(false);

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

  const handleLogout = () => {
    AuthKit.removeToken()
    setAuth(false);
  }

	return (
		<>
			<NavOuterDiv>
         {auth && <Link to="/" onClick={handleLogout}>Logout</Link>}
        			{auth ? me && <h5>Welcome {me.email}!</h5> : ''}   
      </NavOuterDiv>
		</>
	);
}
