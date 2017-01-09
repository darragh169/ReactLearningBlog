import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Blog from './Blog';
import Footer from './Footer';

import sampleData from '../sampleData';

class App extends React.Component {

	constructor(){
		super();

		this.addPost = this.addPost.bind(this);
		this.loadPosts = this.loadPosts.bind(this);

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

	loadPosts() {
		this.setState({
			posts : sampleData
		});
	}

	render(){
		return(
			<div className="main">
				<Header message="Hello"></Header>
				<Navigation></Navigation>
				<Blog posts={this.state.posts} addPost={this.addPost}></Blog>
				<Footer text="Footer"></Footer>
				<button onClick={this.loadPosts}>load Posts</button>
			</div>
		)
	}

}

export default App;