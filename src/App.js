import React, { Component } from 'react'
import './App.css'
import CAddMessage from './containers/CAddMessage'
import CMessageList from './containers/CMessageList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>rrmsg</h2>
        </div>
				<CAddMessage channelId={0} />
				<CMessageList channelId={0} />
      </div>
    )
  }
}

export default App
