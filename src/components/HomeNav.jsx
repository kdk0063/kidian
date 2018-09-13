import React, { Component } from "react";
import '../css/HomepageNav.css';


class HomeNav extends Component {

    render(){
        return (
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">KIDIAN</a>
                
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto">

                    <div className="navbarNav">
                        <Link className="nav-item navlinks" to='/Home'>
                            HOME
                        </Link>
                        <Link className="nav-item navlinks" to='/Provider'>
                            Provider
                        </Link>  
                        <Link className="nav-item navlinks" to='/Parents'>
                            PARENTS
                        </Link>                          
                        <Link className="nav-item navlinks" to='/Login'>
                            LOGIN
                        </Link>
                    </div>

                    </ul>
                </div>
            </nav> 
    )}
}
export default HomeNav;

