import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Blog from './Blog';
import Footer from './Footer';

class App extends React.Component {

	render(){
		return(
			<div className="main">
				<Header message="Hello"></Header>
				<Navigation></Navigation>
				<Blog></Blog>
				<Footer></Footer>
			</div>
		)
	}

}

export default App;