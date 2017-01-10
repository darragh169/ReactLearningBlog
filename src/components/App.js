import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Blog from './Blog';
import Footer from './Footer';

import base from '../base'

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

	componentWillMount(){
		this.ref = base.syncState(`/test/posts`,{ context: this, state: 'posts'});
	}

	componentWillUnMount(){
		base.removeBinding(this.ref);
	}

	addPost(post){
		const posts = {...this.state.posts};
		const timestamp = Date.now();
		posts[`post-${timestamp}`] = post;
		this.setState({posts : posts})
	}

	loadPosts() {
		const posts = Object.assign({...this.state.posts}, sampleData);
		this.setState({
			posts : posts
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