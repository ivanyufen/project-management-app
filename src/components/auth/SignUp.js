import React, { Component } from 'react'

class SignUp extends Component {
    state = {

        email: '',
        password: '',
        first_name: '',
        last_name: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id="first_name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" id="last_name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn lighten-1" onClick={this.handleSubmit}>Sign Up</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignUp;
