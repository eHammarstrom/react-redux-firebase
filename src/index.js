import firebase from 'firebase'

let config = {
	apiKey: 'AIzaSyCilcV9koIQQTfM__MAjgNnfaozazNmRak',
	authDomain: 'rrmsg-1ee32.firebaseapp.com',
	databaseURL: 'https://rrmsg-1ee32.firebaseio.com',
	storageBucket: 'rrmsg-1ee32.appspot.com',
	messagingSenderId: '106272799399'
}

firebase.initializeApp(config)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

import { setDatabase } from './actions'
store.dispatch(setDatabase(firebase.database()))

import { addMessage } from './actions'
store.dispatch(addMessage(0, "Gunnar", "Traktor e kul"))
store.dispatch(addMessage(0, "Bert", "Traktor e inte kul"))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
