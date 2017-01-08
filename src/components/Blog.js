import React from 'react';
import NewPostForm from './NewPostForm'

class Blog extends React.Component {
	
	constructor(){
		super();
		this.goToBlogPost = this.goToBlogPost.bind(this);
	}

	goToBlogPost(event){
		console.log('Go to Blog Post');
		const blogPostId = this.blogPost.id;
		this.context.router.transitionTo(`/${blogPostId}`)
	}

	render(){
		return(
			<div>
				<section className="Blog">
					<h5>These will be Blog posts</h5>
					<ul className="blogList">
						<li><span id="1" className="button" ref={(input) => {this.blogPost = input}} onClick={this.goToBlogPost}>Post 1</span></li>
						<li><span id="2" className="button" ref={(input) => {this.blogPost = input}} onClick={this.goToBlogPost}>Post 2</span></li>
					</ul>
				</section>
				<NewPostForm addPost={this.props.addPost}/>
			</div>
		)
	}
	
}

Blog.contextTypes = {
	router: React.PropTypes.object
}

export default Blog;