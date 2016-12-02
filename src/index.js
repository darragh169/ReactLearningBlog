//index.js
import React from 'react';
import { render } from 'react-dom';

class BlogEntrance extends React.Component {
	render(){
		return <div>Hello</div>
	}
}

render(<BlogEntrance />, document.getElementById('main'));