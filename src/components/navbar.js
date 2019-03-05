import React, { Component } from 'react';

class Navbar extends Component {
    static handleSearchSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <nav className={'navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top'}>
            <div className={"container-fluid"}>
                <div className={"navbar-wrapper"}>
                    <p className={"navbar-brand"}>{this.props.name}</p>
                </div>
                <button className="navbar-toggler toggled" type="button" data-toggle="collapse"
                        aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon icon-bar">{""}</span>
                    <span className="navbar-toggler-icon icon-bar">{""}</span>
                    <span className="navbar-toggler-icon icon-bar">{""}</span>
                </button>
                <div className={"collapse navbar-collapse justify-content-end"}>
                    <form className="navbar-form" onSubmit={this.handleSearchSubmit}>
                      <span className="bmd-form-group">
                          <div className="input-group no-border">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <button type="submit" className="btn btn-white btn-round btn-just-icon">
                              <i className="material-icons">search</i>
                              <div className="ripple-container">{""}</div>
                            </button>
                          </div>
                      </span>
                    </form>
                    <ul className={"navbar-nav"}>{""}</ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar;