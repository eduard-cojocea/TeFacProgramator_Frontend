import React from 'react';
//import './ContactForm.css';
import { URLSearchParams } from 'url';

class MembersText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			response_data: "",
		}
	}

	handleClick(event){
		event.preventDefault();
		fetch("http://localhost:5000/get-applications")
        .then(response => response.json())
        .then(data => this.setState({response_data: data}));
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick.bind(this)}>Get members</button>
				<br/>
				<label>{this.state.response_data}</label>
			</div>
        );
	}
}

export default MembersText;