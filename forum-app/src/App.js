import React, { useState, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { PostContext } from './contexts/PostContext';

import AuthKit from './data/AuthKit';
import CreatePost from './pages/posts/Create';
import GuardedRoute from './components/GuardedRoute';
import Home from './pages/home/Home';
import Login from './pages/authentication/Login';
import Navbar from './components/navbar/Navbar';
import PostDetail from './pages/posts/Detail';
import PostList from './pages/posts/List';
import Register from './pages/authentication/Register';

function App() {
	const [auth, setAuth] = useState(false);
	const [postData, setPostData] = useState(null);

	let history = useHistory();

	useEffect(() => {
		if (AuthKit.getToken()) {
			setAuth(true);
			history.push('/home');
		} else {
			setAuth(false);
		}
	}, []);

	return (
		<>
			<PostContext.Provider value={{ postData, setPostData }}>
				<AuthContext.Provider value={{ auth, setAuth }}>
					<Navbar auth={auth} />
					<Switch>
						<GuardedRoute auth={auth} exact path='/posts/create' component={CreatePost}></GuardedRoute>
						<GuardedRoute auth={auth} exact path='/posts/:id' component={PostDetail}></GuardedRoute>
						<GuardedRoute auth={auth} exact path='/posts' component={PostList}></GuardedRoute>
						<GuardedRoute auth={auth} exact path='/home' component={Home}></GuardedRoute>
						<Route exact path='/register' component={Register}></Route>
						<Route exact path='/' component={Login}></Route>
					</Switch>
				</AuthContext.Provider>
			</PostContext.Provider>
		</>
	);
}

export default App;
