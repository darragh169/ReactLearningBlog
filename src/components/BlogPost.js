import React from 'react';

class BlogPost extends React.Component {
	
	render(){

		const { details } = this.props;

		return(
			<li id={details.id}>{details.blogText}</li>
		)
	}
	
}

export default BlogPost;
