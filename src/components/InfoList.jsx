import React, { Component} from 'react';
import '../css/InfoList.css'

class InfoList extends Component{

    render(){
        return(
            <div id="infoList">
                <div className="container-fluid">                
                    <div className="row categories">
                        <span className="vendorIcon flaticon-confetti-2">       
                            <span className="catVendors"> Dates </span> 
                        </span>
                        
                        <span className="mobileIcon flaticon-smartphone-2"> 
                            <span className="catMobiles"> Guests </span> 
                        </span>

                        <span className="cakeIcon flaticon-cake"> 
                            <span className="catCakes"> Price </span> 
                        </span>
                    </div>                    
                </div>

                <div className="contents">
                    <div className="row row1">
                        <div className="col-md-8">
                            <h4 className="pb-3 align-left mbr-fonts-style">
                                Vendors
                            </h4>

                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-auto">
                                        <img className="card-img-top" src="/img/photos/AdobeStock_124884611.jpeg" alt="Card image cap"></img>
                                    </div>
                                    <div class="col">
                                        <div class="card-block px-2">
                                            <h3 className="types"> Art & Painting </h3>
                                            <h3 class="card-title">Art & Soul Studio</h3>
                                            <p class="card-text">Description</p>

                                            <div className="stars">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> $45Usd </h3>
                                            <span> per person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <img className="card-img-top" src="/img/photos/AdobeStock_124884611.jpeg" alt="Card image cap"></img>
                                    </div>
                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> Art & Painting </h3>
                                            <h3 className="card-title">Art & Soul Studio</h3>
                                            <p className="card-text">Description</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> $45Usd </h3>
                                            <span> per person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <img className="card-img-top" src="/img/photos/AdobeStock_124884611.jpeg" alt="Card image cap"></img>
                                    </div>
                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> Art & Painting </h3>
                                            <h3 className="card-title">Art & Soul Studio</h3>
                                            <p className="card-text">Description</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> $45Usd </h3>
                                            <span> per person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <img className="card-img-top" src="/img/photos/AdobeStock_124884611.jpeg" alt="Card image cap"></img>
                                    </div>
                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> Art & Painting </h3>
                                            <h3 className="card-title">Art & Soul Studio</h3>
                                            <p className="card-text">Description</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> $45Usd </h3>
                                            <span> per person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <img className="card-img-top" src="/img/photos/AdobeStock_124884611.jpeg" alt="Card image cap"></img>
                                    </div>
                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> Art & Painting </h3>
                                            <h3 className="card-title">Art & Soul Studio</h3>
                                            <p className="card-text">Description</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> $45Usd </h3>
                                            <span> per person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <img className="card-img-top" src="/img/photos/AdobeStock_124884611.jpeg" alt="Card image cap"></img>
                                    </div>
                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> Art & Painting </h3>
                                            <h3 className="card-title">Art & Soul Studio</h3>
                                            <p className="card-text">Description</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h3 className="types"> $45Usd </h3>
                                            <span> per person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="pagination">
                                <a href="#">&laquo;</a>
                                <a href="#" className="active">1</a>
                                <a href="#" >2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>
           
                        </div>

                        <div className="col-md-4">
                            <div className="google-map">
                                <iframe frameBorder="0" 
                                style={{border:"0"}}src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDehRL2mnrp5MFyxRYO9v0pItaC1IoT7EA&amp;q=place_id:ChIJn6wOs6lZwokRLKy1iqRcoKw" allowFullScreen="">
                                </iframe>
                            </div>
                        </div>               
                    </div>                                
                </div>                 
            </div>
        )
    }
}
export default InfoList;