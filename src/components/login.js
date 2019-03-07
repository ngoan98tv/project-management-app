import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import {login} from "../redux/actions/authActions";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            passwordInput: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.emailInput, this.state.passwordInput);
    }

    handleEmailChange(event) {
        this.setState({
            emailInput: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            passwordInput: event.target.value
        })
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/dashboard' />
        }

        return (
            <div id={"login"}>
                <div className={"card"}>
                    <div className={"card-header card-header-text card-header-primary"}>
                        <div className={"card-text"}>

                            <h3 className={"card-title"}>Software Company</h3>
                        </div>
                    </div>
                    <div className={"card-body"}>
                        <form onSubmit={this.handleSubmit}>
                            <div className={"form-group"}>
                                <input id={"userEmail"}
                                       type={"email"}
                                       className={"form-control"}
                                       placeholder={"Enter your email"}
                                       value={this.state.emailInput}
                                       onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className={"form-group"}>
                                <input id={"userPassword"}
                                       type={"password"}
                                       className={"form-control"}
                                       placeholder={"Enter your password"}
                                       onChange={this.handlePasswordChange}
                                       value={this.state.passwordInput}/>
                                <small className={"form-text text-muted"}><Link to={"/forgot-password"}>Forgot password!</Link></small>
                            </div>
                            <button type={"submit"} className={"btn btn-primary"}>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => {
        dispatch(login(email,password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);