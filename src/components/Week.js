import React from 'react'

class Week extends React.Component {
 	constructor(props) {
 		super(props)
 	}
 	render() {
 		return (
 			<div>
 				This is a {this.props.label}
 			</div>
 		)
 	}
}

export default Week