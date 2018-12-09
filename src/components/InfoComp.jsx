import React, { Component } from 'react';
import '../css/InfoComp.css';
import { Link } from 'react-router-dom';

import * as InfoCompService from '../services/InfoCompService';

class InfoComp extends Component{

    state = {
        lat: "15.354765",
        lon: "73.946676"  
    }

   vendorsList = () => {

    console.log(this.state);

    const postData = {
        lat: this.state.lat,
        lon: this.state.lon
    }

    InfoCompService.postVendors(postData)
            .then(response => { 
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
   }
    
    render(){
        return(
            <div className="container">
                <div className="row">                

                    <div>
                        <button onClick={this.vendorsList}>vendors list</button>
                    </div>

                    <Link to="/DetailInfo">
                        <div id="contentCard" className="col-xl-3 col-lg-4 col-sm-12 col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="/img/photos/AdobeStock_124884611.jpeg" alt="Card image cap"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Experience with a Sloth</h5>
                                        <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                        <p className="card-text">$22 per person</p>
                                    
                                        <div className="reviews">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Link>

                    <div id="contentCard"className="col-xl-3 col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src="/img/photos/AdobeStock_140295587.jpeg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Experience with a Sloth</h5>
                                <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                <p className="card-text">$22 per person</p>
                               
                                <a href="#" className="card-link">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="contentCard" className="col-xl-3 col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src="/img/photos/AdobeStock_142994523.jpeg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Experience with a Sloth</h5>
                                <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                <p className="card-text">$22 per person</p>
                               
                                <a href="#" className="card-link">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="contentCard" className="col-xl-3 col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src="/img/photos/AdobeStock_102357996.jpeg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Experience with a Sloth</h5>
                                <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                <p className="card-text">$22 per person</p>
                               
                                <a href="#" className="card-link">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="contentCard" className="col-xl-3 col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src="/img/photos/AdobeStock_86211989.jpeg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Experience with a Sloth</h5>
                                <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                <p className="card-text">$22 per person</p>
                               
                                <a href="#" className="card-link">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="contentCard" className="col-xl-3 col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src="/img/photos/AdobeStock_71033033.jpeg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Experience with a Sloth</h5>
                                <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                <p className="card-text">$22 per person</p>
                               
                                <a href="#" className="card-link">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="contentCard" className="col-xl-3 col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src="/img/photos/AdobeStock_65137052.jpeg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Experience with a Sloth</h5>
                                <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                <p className="card-text">$22 per person</p>
                               
                                <a href="#" className="card-link">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="contentCard" className="col-xl-3 col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src="/img/photos/AdobeStock_61921913.jpeg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Experience with a Sloth</h5>
                                <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                <p className="card-text">$22 per person</p>
                               
                                <a href="#" className="card-link">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoComp;