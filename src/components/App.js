import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Page1 from './Page1'
import Page2 from './Page2'

class App extends Component {
	render(){
		return (
			<div>
				<Header />
				<Route path="/page1" component={Page1} />
				<Route path="/page2" component={Page2} />
			</div>
		)
	}
}

export default App