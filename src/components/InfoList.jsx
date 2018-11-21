import React, { Component} from 'react';
import '../css/InfoList.css'

class InfoList extends Component{

    render(){
        return(
            <div id="infoList">

                <div className="container categories">                
                    <div className="row">
                        <span className="vendorIcon flaticon-confetti-2">       
                            <span className="catVendors"> Vendors </span> 
                        </span>
                        
                        <span className="mobileIcon flaticon-smartphone-2"> 
                            <span className="catMobiles"> Mobiles </span> 
                        </span>

                        <span className="cakeIcon flaticon-cake"> 
                            <span className="catCakes"> Cakes </span> 
                        </span>
                    </div>                    
                </div>

                <div className="container contents">
                    <div className=" row">
                        <div className="col-md-8">
                            <h4 className="pb-3 align-left mbr-fonts-style">
                                Drop a Line
                            </h4>

                            <div className="card w-140">
                                <div className="row no-gutters">
                                    <div className="col-auto">
                                        <img src="//placehold.it/200" className="img-fluid" alt="" />
                                    </div>

                                    <div className="col">
                                        <div className="card-block px-2">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Description</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card-block ">
                                            <h4 className="card-title">Title</h4>
                                            <p className="card-text">Description</p>
                                        </div>
                                    </div>
                                </div>
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