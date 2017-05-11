import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render(){
		return (
			<div style={{height: 40, borderBottom: '1px solid black'}}>
				<Link to="/page1">Page1</Link> | 
				<Link to="/page2"> Page2</Link>
			</div>
		)
	}
}

export default Header