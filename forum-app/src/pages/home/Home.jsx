import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeDivStyle, HomeWrapper } from './Home.style';

export default function Home() {
	return (
		<>
			<HomeWrapper>
				<HomeDivStyle>
					<h1>Ask, talk, discuss. </h1>
					<h1>Hit the button below to get started</h1>
					<Link to='/posts'>
						{' '}
						<button>
							<h3>Get started</h3>
						</button>
					</Link>
				</HomeDivStyle>
			</HomeWrapper>
		</>
	);
}
