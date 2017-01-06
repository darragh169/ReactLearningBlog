import React from 'react';

class Blog extends React.Component {
	
	constructor(){
		super();
		this.goToBlogPost = this.goToBlogPost.bind(this);
	}

	goToBlogPost(event){
		console.log('Go to Blog Post');
	}

	render(){
		return(
			<section className="Blog">
				<h5>These will be Blog posts</h5>
				<ul className="blogList">
					<li><span className="button" onClick={this.goToBlogPost}>Post 1</span></li>
				</ul>
			</section>
		)
	}
	
}

export default Blog;