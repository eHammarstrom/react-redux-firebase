import React, { Component } from 'react';
import { connect } from 'react-redux';

class CAddMessage extends Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.ref = this.props.database.ref('channels/' + this.props.channelId + '/messages/');
	}

	render() {
		let user, text;

		return (
			<div className="AddMessage">
				<form onSubmit={e => {
					e.preventDefault();
					if (text.value !== "" && user.value !== "") {
						this.ref.push({
							user: user.value,
							text: text.value
						});

						text.value = "";
					}
				}}>
					<input placeholder="Username" ref={inUser => {
						user = inUser;
					}} />
					<br />
					<input placeholder="Message" ref={inText => {
						text = inText;
					}} />
					<br />
					<button type="submit">
						Transmit
					</button>
				</form>
			</div>
		);
	}
}

const mapDatabaseToProps = (state) => {
	return {
		database: state.database
	};
}

CAddMessage = connect(mapDatabaseToProps)(CAddMessage);

export default CAddMessage;
