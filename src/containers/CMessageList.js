import { connect } from 'react-redux';
import MessageList from '../components/MessageList';

const mapStateToProps = (state, ownProps) => {
	return {
		messages: state.messages[ownProps.channelId] || [],
		database: state.database
	};
};

const CMessageList = connect(mapStateToProps)(MessageList);

export default CMessageList;
