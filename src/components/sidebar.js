import {Link, withRouter} from "react-router-dom";
import React, { Component } from 'react';
import sidebarBackground from '../img/sidebarbg.jpg';
import Auth from "./auth";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'Dashboard',
            items: [
                { name: "Dashboard", badge: 0, icon: "dashboard", url: "/dashboard", display: true},
                { name: "Projects", badge: 4, icon: "assignment", url: "/projects", display: true},
                { name: "Tasks", badge: 5, icon: "ballot", url: "/tasks", display: true},
                { name: "Discussions", badge: 0, icon: "chat", url: "/discussions", display: true},
                { name: "Users", badge: 0, icon: "person", url: "/users", display: true},
                { name: "Settings", badge: 0, icon: "settings", url: "/settings", display: true},
                { name: "Log Out", badge: 0, icon: "exit_to_app", url: "/logout", display: true}
            ]
        }
    }

    render() {
        const items = this.state.items.filter((item) => item.display).map((item,index) => (
            <li className={this.state.activeItem === item.name ? "nav-item active" : "nav-item"} key={"item_" + index}>
                <Link className="nav-link" to={item.url} onClick={() => {
                    this.setState({
                        activeItem: item.name
                    })
                }}>
                    <i className="material-icons">{item.icon}</i>
                    {item.badge > 0
                        ? <p>{item.name + " "}<span className='badge badge-primary'>{item.badge}</span></p>
                        : <p>{item.name}</p>}
                </Link>
            </li>
        ));
        return (
            <div className={"sidebar"} data-color="purple" data-background-color={"black"} data-image={sidebarBackground}>
                <div className={"logo"}>
                    <h1 className={"simple-text logo-normal"}>Software Company</h1>
                </div>
                <div className={"sidebar-wrapper"}>
                    <ul className={"nav"}>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}

const DisplaySidebar = withRouter(() => {
    return Auth.isAuthenticated
        ? <Sidebar/>
        : "";
});

export default DisplaySidebar;