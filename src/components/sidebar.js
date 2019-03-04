import {Link, withRouter} from "react-router-dom";
import React, { Component } from 'react';
import Auth from "./auth";

class Sidebar extends Component {
    render() {
        return (
            <div className={"sidebar"} data-color="purple">
                <div className={"logo"}>
                    <h1 className={"simple-text logo-normal"}>Software Company</h1>
                </div>
                <div className={"sidebar-wrapper"}>
                    <ul className={"nav"}>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/dashboard">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">
                                <i className="material-icons">assignment</i>
                                <p>Projects <span className="badge badge-primary">4</span></p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/tasks">
                                <i className="material-icons">ballot</i>
                                <p>Tasks <span className="badge badge-primary">14</span></p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/discussions">
                                <i className="material-icons">chat</i>
                                <p>Discussions <span className="badge badge-primary">4</span></p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/users">
                                <i className="material-icons">person</i>
                                <p>Users</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/settings">
                                <i className="material-icons">settings</i>
                                <p>Settings</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/logout">
                                <i className="material-icons">exit_to_app</i>
                                <p>Log out</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const DisplaySidebar = withRouter(() => {
    return Auth.isAuthenticated
        ? <Sidebar/>
        : ""
});

export default DisplaySidebar;