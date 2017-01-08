import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Blog from './Blog';
import Footer from './Footer';

class App extends React.Component {

	constructor(){
		super();

		this.addPost = this.addPost.bind(this);

		this.state = {
			posts : {},
			order : {}
		};
	}

	addPost(post){
		const posts = {...this.state.posts};
		const timestamp = Date.now();
		posts[`post-${timestamp}`] = post;
		this.setState({posts : posts})
	}

	render(){
		return(
			<div className="main">
				<Header message="Hello"></Header>
				<Navigation></Navigation>
				<Blog addPost={this.addPost}></Blog>
				<Footer text="Footer"></Footer>
			</div>
		)
	}

}

export default App;