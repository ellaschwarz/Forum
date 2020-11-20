import React, { useState } from 'react';


import { Route, Switch } from 'react-router-dom';
import { PostContext } from './contexts/PostContext';
import { UserContext } from './contexts/UserContext';

import AuthKit from './data/AuthKit';
import CreatePost from './pages/posts/Create';
import GuardedRoute from './components/GuardedRoute';
import Home from './pages/home/Home';
import Login from './pages/authentication/Login';
import PostList from './pages/posts/List';
import PostDetail from './pages/posts/Detail';
import Register from './pages/authentication/Register';


function App() {
	const [auth, setAuth] = useState(true);
	const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);
  
  const authKit = new AuthKit();

//  if(!authKit.getToken()) {
//     setAuth(false)
//   } else {
//     setAuth(true)
//   }

	return (
		<>
			<PostContext.Provider value={{ postData, setPostData }}>
				<UserContext.Provider value={{ userData, setUserData }}>
					<Switch>
						<GuardedRoute auth={auth} exact path='/posts/create' component={CreatePost}></GuardedRoute>
						<GuardedRoute auth={auth} exact path='/posts/:id' component={PostDetail}></GuardedRoute>
						<GuardedRoute auth={auth} exact path='/posts' component={PostList}></GuardedRoute>
						<GuardedRoute auth={auth} exact path='/home' component={Home}></GuardedRoute>
						<Route exact path='/register' component={Register}></Route>
						<Route exact path='/' component={Login}></Route>
					</Switch>
			  </UserContext.Provider>
      </PostContext.Provider>
		</>
	);
}

export default App;
