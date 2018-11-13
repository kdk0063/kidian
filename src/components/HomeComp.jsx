import React, { Component } from 'react';
import '../css/HomeComp.css';
import InfoComp from './InfoComp';
import { Link } from 'react-router-dom';


class HomeComp extends Component{

    render(){
        return(
            <div id="firstComp">
                <div className="container">
                    <div className="contentTitle">
                        <h3>
                            <div>All Party Products</div>
                        </h3>
                        <h6>
                        
                        <div className="row">
                            <span className="vendorIcon flaticon-confetti-2">       <span className="catVendors"> Vendors </span> 
                            </span>
                                <span className="mobileIcon flaticon-smartphone-2"> <span className="catMobiles"> Mobiles </span> 
                            </span>
                            <span className="cakeIcon flaticon-cake"> 
                                <span className="catCakes"> Cakes </span> 
                            </span>
                        </div>
                            
                        </h6>
                    </div>
                </div>
            
                <section id="vendors"> 
                    <div className="container">
                        <div className="contentTitle">
                            <h3>
                                <div>Top-Rated Vendors</div>
                            </h3>
                        </div>
                        <InfoComp></InfoComp>

                        <div>
                            <Link to="/InfoLanding" className="showAll">Show all (30+) > </Link>
                        </div>                     
                    </div>
                </section>

                <section id="mobiles"> 
                    <div className="container">
                        <div className="contentTitle">
                            <h3>
                                <div>Top-Rated Mobile</div>
                            </h3>
                        </div>
                        <InfoComp></InfoComp>

                        <div>
                            <Link to="/InfoLanding" className="showAll">Show all (30+) > </Link>
                        </div>
                    </div>
                </section>

                <section id="cakes"> 
                    <div className="container">
                        <div className="contentTitle">
                            <h3>
                                <div>Top-Rated Cakes</div>
                            </h3>
                        </div>
                        <InfoComp></InfoComp>

                        <div>
                            <Link to="/InfoLanding" className="showAll">Show all (30+) > </Link>
                        </div>
                    </div>        
                </section>

            </div>
        )
    }
}
export default HomeComp;