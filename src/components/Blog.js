import React from 'react';
import { getRandomDay } from '../Utilities'

class Blog extends React.Component {
	
	render(){
		return(
			<section className="Blog">
				<h5>Title</h5>
				<article>
					<p>test test test test</p>
					<p>A Random day of the week is { getRandomDay() }</p>
				</article>
			</section>
		)
	}
	
}

export default Blog;