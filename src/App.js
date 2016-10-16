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

				<table>
					<tbody>
						<tr>
							<td>
								<CAddMessage channelId={0} />
							</td>
							<td>
								<CAddMessage channelId={1} />
							</td>
						</tr>
						<tr>
							<td>
								<CMessageList channelId={0} />
							</td>
							<td>
								<CMessageList channelId={1} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default App
