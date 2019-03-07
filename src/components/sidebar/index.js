/*Sidebar Component*/
import {Link} from "react-router-dom";
import React, { Component } from 'react';
import sidebarBackground from '../../img/sidebarbg.jpg';
import {connect} from "react-redux";

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
        this.createItem = this.createItem.bind(this);
    }

    createItem(name, url, icon, badge) {
        return (
            <li className={this.state.activeItem === name ? "nav-item active" : "nav-item"} key={name}>
                <Link className="nav-link" to={url} onClick={() => {
                    this.setState({
                        activeItem: name
                    })
                }}>
                    <i className="material-icons">{icon}</i>
                    {badge > 0
                        ? <p>{name + " "}<span className='badge badge-primary'>{badge}</span></p>
                        : <p>{name}</p>}
                </Link>
            </li>
        );
    }

    render() {
        if (this.props.isAuthenticated) {
            const items =
                this.state.items
                    .filter((item) => item.display)
                    .map((item) => this.createItem(item.name, item.url, item.icon, item.badge));
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
                    <div className={"sidebar-background"} style={{ backgroundImage: `url(${sidebarBackground})` }}/>
                </div>
        );
        } else {
            return (<div/>);
        }
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Sidebar);