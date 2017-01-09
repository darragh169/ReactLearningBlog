import React from 'react';

import NewPostForm from './NewPostForm';
import BlogPost from './BlogPost';

class Blog extends React.Component {
	
	constructor(){
		super();
		this.goToBlogPost = this.goToBlogPost.bind(this);
	}

	goToBlogPost(event){
		const blogPostId = this.blogPost.id;
		this.context.router.transitionTo(`/${blogPostId}`)
	}

	render(){
		return(
			<div>
				<section className="Blog">
					<h5>These will be Blog posts</h5>
					<ul className="blogList">
					{
							Object
								.keys(this.props.posts)
								.map(key => <BlogPost key={key} details={this.props.posts[key]}/>)
					}
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
