import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Page1 from './Page1'

class Page2 extends Component {
	render(){
		return (
			<div className="row">
				<div id="sidebar">
					<Link to="/page2/2-1">Page2-1</Link>
				</div>
				<div id="content">
					<Route path="/page2/2-1" component={Page1} />
				</div>
			</div>
		)
	}
}

export default Page2