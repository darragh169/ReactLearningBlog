import React from 'react';

class NewPostForm extends React.Component {

	createBlogPost(event){

		event.preventDefault();

		const post ={
			blogText: this.blogText.value
		}

		this.props.addPost(post);
		this.newPostForm.reset();
	}

	render(){
		return (
			<form ref={(input) => this.newPostForm = input} className="NewPostForm" onSubmit={(e) => this.createBlogPost(e)}>
				<textarea ref={(input) => this.blogText = input} type="text"/>
				<button type="submit">Enter</button>
			</form>
		)
	}
}

export default NewPostForm;