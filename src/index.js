//index.js
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import BlogEntrance from './components/BlogEntrance';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App}></Match>
				<Miss component={NotFound}></Miss>
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('main'));