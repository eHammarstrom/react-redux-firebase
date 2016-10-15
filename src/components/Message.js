import React, { Component, PropTypes } from 'react'
import './Message.css'

class Message extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<div className={this.props.id % 2 === 0 ? "Message on" : "Message off"}>
				<p><span className="username">{this.props.user}:</span>{this.props.text}</p>
			</div>
		)
	}
}

Message.propTypes = {
	id: PropTypes.number.isRequired,
	user: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default Message
