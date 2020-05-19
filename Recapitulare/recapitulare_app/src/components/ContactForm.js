import React from 'react';
import './ContactForm.css';
import { URLSearchParams } from 'url';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            message: ""
        }
    }

    handleClick(event) {
        event.preventDefault();
        /*const data = new URLSearchParams();
        data.append("email", this.state.email);
        data.append("message", this.state.message);
        */

        /*let data = new HttpParams()
            .set("email", this.state.email)
            .set("message", this.state.message);

        data.toString();*/
        const data = {
            "email": this.state.email,
            "message": this.state.message,
        }

        fetch("http://localhost:5000/save-application", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(function () {
                alert("Succes");
        });
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "email") {
            this.setState({
                email: value
            });
        }
        else if (name === "message") {
            this.setState({
                message: value
            });
        }

        console.log(name, value);
    }

    render() {
        return (
            <div className="contact-form">
                <form action="/">
                    <div>
                        <label className="form-label">Email</label>
                        <input className="form-element" type="text" name="email" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div>
                        <label className="form-label">Your application</label>
                        <textarea className="form-element" name="message" rows="20" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div>
                        <button className="form-button" onClick={this.handleClick.bind(this)}> Send</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;