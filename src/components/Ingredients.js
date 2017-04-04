import React from 'react'

class Ingredients extends React.component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				This is {this.props.label}
			</div>
		) 
	}
}

export default Ingredients