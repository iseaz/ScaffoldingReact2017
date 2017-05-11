import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'

class Page1 extends Component {
	render(){
		return (
			<div>
				<h3>{this.props.user[0].name}</h3>

				<button onClick={() => this.props.loadData()}>Load Data</button>

				{
					this.props.reddit.map((item, index) => {
						return (
							<div key={index}>
								{item.data.title}
							</div>
						)
					})
				}
			</div>
		)
	}
}

const mapStateToProps = ({ user, reddit }) => {
	return {
		user,
		reddit
	}
}

export default connect(mapStateToProps, { loadData })(Page1)