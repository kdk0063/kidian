import React, { Component } from "react";
import '../css/Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render(){
        return (
            <div className="NavKidian">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/home">
                        KIDIAN
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="custom-toggler navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup">
                        <div className="navbarNav">
                            <Link className="nav-item navlinks" to='/Home'>
                                HOME
                            </Link>
                            <Link className="nav-item navlinks" to='/Parents'>
                                PARENTS
                            </Link>                          
                            <Link className="nav-item navlinks" to='/Login'>
                                LOGIN
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    };
}
export default Nav;

