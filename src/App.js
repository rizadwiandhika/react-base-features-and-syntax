import React from 'react'
import { Component } from 'react'
import './App.css';

import './UserInput/UserInput'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

	state = {
		users : [
			{name: 'Riza'},
			{name: 'Arif'},
			{name: 'Adjie'},
		],
	}

	usernameManipulateHandler = (event) => {
		this.setState({
			users : [
				{name: event.target.value},
				{name: 'Arif'},
				{name: 'Adjie'},
			]
		})
	}

	render() {
		return (
			<div className="App">
				<h1>Assignment</h1>
				<UserInput 
					manipulateName={ this.usernameManipulateHandler }
					name={ this.state.users[0].name } 
				/>

				<UserOutput username={ this.state.users[0].name } />
				<UserOutput username={ this.state.users[1].name } />
				<UserOutput username={ this.state.users[2].name } />
			</div>
		)
	}
}


export default App;