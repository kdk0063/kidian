import React, { Component } from "react";
import '../css/Nav.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Nav extends Component {
    
    listenScrollEvent = e => {
        //or use scrollY
        if (window.scrollY > 50) {
            $('.navbar').addClass('transparent');
        } 
        else {
            $('.navbar').removeClass('transparent'); 
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)    
    }
    
    render(){
        return (
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/home">
                        <img className="logo" src="/img/graphics/Kidian_Logov2.png" alt="none"/>
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
                                Home
                            </Link>
                            <Link className="nav-item navlinks" to='/Provider'>
                                Provider
                            </Link>  
                            {/*
                            <Link className="nav-item navlinks" to='/Parents'>
                                PARENTS
                            </Link>   
                            */}                     
                            <Link className="nav-item navlinks" to='/Login'>
                                Login
                            </Link>
                        </div>
                    </div>
                </nav>
        )
    };
}
export default Nav;

