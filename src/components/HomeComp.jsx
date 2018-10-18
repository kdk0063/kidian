import React, { Component } from 'react';
import '../css/HomeComp.css';
import InfoComp from './InfoComp';

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
                            <span className="vendorIcon flaticon-birthday-1"> <span className="catVendors"> Vendors </span> </span>
                            <span className="mobileIcon flaticon-smartphone-2"> <span className="catMobiles"> Mobiles </span> </span>
                            <span className="cakeIcon flaticon-birthday-3"> 
                            <span className="catCakes"> Cakes </span> </span>
                            
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
                            <a href="#" className="showAll">Show all (30+) > </a>
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
                            <a href="#" className="showAll">Show all (30+) > </a>
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
                        <a href="#" className="showAll">Show all (30+) > </a>
                        </div>
                    </div>        
                </section>

            </div>
        )
    }
}
export default HomeComp;