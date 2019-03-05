import React, { Component } from 'react';
import Navbar from "./navbar";

class Tasks extends Component {
    render() {
        return(
            <div className={"main-panel"}>
                <Navbar name={"Tasks"}/>
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

export default Tasks;