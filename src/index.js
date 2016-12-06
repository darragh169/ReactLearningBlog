//index.js
import React from 'react';
import { render } from 'react-dom';

class BlogEntrance extends React.Component {
	render(){
		return (
			<h2>Welcome!</h2>
		)
	}
}

render(<BlogEntrance />, document.getElementById('main'));