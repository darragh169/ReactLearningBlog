import React from 'react';

class BlogPost extends React.Component {
	
	render(){

		const { details , index } = this.props;

		return(
			<li id={index}>{details.blogText}</li>
		)
	}
	
}

export default BlogPost;
