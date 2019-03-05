import React, { Component } from 'react';
import Navbar from "./navbar";

class Users extends Component {
    render() {
        return (
            <div className={"main-panel"}>
                <Navbar name={"Users"}/>
                <div className={"content"}>
                    <div className={"container-fluid"}>
                        <div className={"row"}>
                            {""}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;