import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Auth from './auth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToPrefer: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const userEmail = document.getElementById("userEmail").value;
        const userPassword = document.getElementById("userPassword").value;
        Auth.signIn(userEmail, userPassword,() => {
            this.setState({
                redirectToPrefer: true
            })
        });
    }

    render() {
        if (this.state.redirectToPrefer) {
            return <Redirect to='/' />
        }

        return (
            <div id={"login"}>
                <div className={"card"}>
                    <div className={"card-header card-header-text card-header-primary"}>
                        <div className={"card-text"}>

                            <h3 className={"card-title"}>Sofware Company</h3>
                        </div>
                    </div>
                    <div className={"card-body"}>
                        <form onSubmit={this.handleSubmit}>
                            <div className={"form-group"}>
                                <input id={"userEmail"} type={"email"} className={"form-control"} placeholder={"Enter your email"}/>
                            </div>
                            <div className={"form-group"}>
                                <input id={"userPassword"} type={"password"} className={"form-control"} placeholder={"Enter your password"}/>
                                <small className={"form-text text-muted"}><a href={"/forgot-password"}>Forgot password!</a></small>
                            </div>
                            <button type={"submit"} className={"btn btn-primary"}>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;