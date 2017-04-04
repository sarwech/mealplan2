import React from 'react'

class Day extends React.Component {
	constructor (props) {
		super(props)
	}
	render() {
		return (
			<div onClick={this.props.onClick}>
				This is a day: {this.props.label}
			</div>
		)
	}
}

export default Day