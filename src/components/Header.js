import React from 'react';

class Header extends React.Component {
	render(){
		return(
			<header className="Header">
				<h3>Darraghs Blog</h3>
				<h1>{this.props.message}</h1>
			</header>
		)
	}
}

export default Header;