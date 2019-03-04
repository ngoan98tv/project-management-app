import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Auth from './auth';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToLogin: false
        };
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        Auth.signOut(() => {
            this.setState({
                redirectToLogin: true
            })
        });
    }


    render() {
        if (this.state.redirectToLogin) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.signOut}>Sign out</button>
            </div>
        );
    }
}

export default Home;