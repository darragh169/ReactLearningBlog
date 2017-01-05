import React from 'react';

class Header extends React.Component {
	render(){
		return(
			<div className="Header">{this.props.message}</div>
		)
	}
}

export default Header;