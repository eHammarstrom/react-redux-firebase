import React, { Component, PropTypes } from 'react'
import Message from './Message'
import './MessageList.css'

import { addMessage } from '../actions'

class MessageList extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	componentWillMount() {
		this.channelRef = this.props.database.ref('channels/' + this.props.channelId + '/messages/')
		this.channelRef.on('child_added', (data) => {
			this.props.dispatch(addMessage(
				this.props.channelId,
				data.val().user,
				data.val().text
			))
		})
	}

	render() {
		return (
			<div className="MessageList">
				{
					this.props.messages.map((message, index) => {
						return (<Message
							key={index}
							id={index}
							user={message.user}
							text={message.text}
						/>)
					})
				}
			</div>
		)
	}
}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape({
		user: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	database: PropTypes.object.isRequired
}

export default MessageList
