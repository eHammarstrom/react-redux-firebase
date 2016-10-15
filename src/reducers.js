import { combineReducers } from 'redux'
import { ADD_MESSAGE, SET_DATABASE } from './actions'

function messages(state = [], action) {
	switch (action.type) {
		case ADD_MESSAGE:
			if (typeof state[action.channelId] !== 'undefined') {
				return state.map((channel, index) => {
					if (index === action.channelId) {
						return [
							{
								user: action.user,
								text: action.text
							},
							...channel
						]
					}
					return channel
				})
			} else {
				let newState = Object.assign([], state)
				newState[action.channelId] = [{
					user: action.user,
					text: action.text
				}]
				return newState
			}
		default:
			return state
	}
}

function database(state = {}, action) {
	if (action.type === SET_DATABASE) {
		return action.database
	} else {
		return state
	}
}

let reducer = combineReducers({
	messages,
	database
})

export default reducer
