import React, { Component } from 'react';
import '../css/HomeComp.css';

class HomeComp extends Component{

    render(){
        return(
            <div id="firstComp">
                <div className="container">
                    <div className="contentTitle">
                        <h3>
                            <div>Top-rated experiences</div>
                        </h3>
                        <h6>
                            <div>Highly reviwed by parents and kids</div>
                        </h6>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Experience with a Sloth</h5>
                                    <h6 className="card-subtitle mb-2 text-muted category">Wildlife Spotting</h6>
                                    <p className="card-text">$22 per person</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>

                            <div className="card">
                                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-4">

                            <div className="card">
                                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>  

                            <div className="card">
                                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>

                            <div className="card">
                                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeComp;