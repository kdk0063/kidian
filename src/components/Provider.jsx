import React, { Component } from "react"; 
import '../css/Provider.css';

class Provider extends Component{
    state={
        business: '',
        contactName: '',
        phoneNumber: '',
        email: '',
    }

    render(){ 
        return (
            <div id="home">     
                <section className="firstSection"> 
                    <div className="row"> 
                        <div className="col-lg-6 intro">
                            <div className="introContent">
                                <h3>"More party means more business and more engagement" <span>-Pierre Maalouf, Tiny Towne</span></h3>
                            </div>
                        </div>

                        <div className="col-lg-6 register">
                            <div className="card">
                                <div className="signup-form">
                                        <h3 className="card-title text-center">Join Kidian Today</h3>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.business} onChange={e => this.setState({ business: e.target.value })}  placeholder="Business Name"/>
                                        </div>

                                        <div className="form-row">  
                                            <div className="form-group col-sm-6">
                                                <input type="text" className="form-control" value={this.setState.contactName} onChange={ e=> this.setState ({ contactName: e.target.value })} placeholder="Contact Name"/>
                                            </div>

                                            <div className="form-group col-sm-6">
                                                <input type="text" className="form-control" value={this.setState.phoneNumber} onChange={ e=> this.setState ({ phoneNumber: e.target.value })} placeholder="Phone Number"/>       
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}  placeholder="Email"/>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block"> Get Started</button> 
                                    </div>
                            </div>
                        </div>   
                           
                        </div>                              
                    </div> 
                </section>

                <div className="secondSection">
                    <div className="container secondContent">
                        <h2>What is Kidian Experiences</h2>
                        <p>
                            Kidian is an app that connects the best birthday party venues, entertainers, and vendors with people interested in booking birthday parties. We do this by empowering local businesses and in turn, generating new ways for people to earn, work, and live.
                        </p> 
                    </div>
                </div>
                    
                <section className="thirdSection">
                    <div className="container">
                        <div className="row ">
                            <div className="card" style={{width: '18rem'}}>
                                <span className="flaticon-responsive-1"> </span>
                                <div className="card-body">
                                    <h4 className="card-title">Parents find your business</h4>
                                    <p className="card-text">Kidian helps you create awareness and reach more customers</p>
                                </div>
                            </div>

                            <div className="card" style={{width: '18rem'}}>
                                <span className="flaticon-balloons"></span>
                                <div className="card-body">
                                    <h4 className="card-title">Parents explore and book your packages</h4>
                                    <p className="card-text">Set a schedule that works for your business. Pick your availability and price, and manage all the details with a convenient website</p>
                                </div>
                            </div>

                            <div className="card" style={{width: '18rem'}}>
                                <span className="flaticon-payment-method"> </span>
                                <div className="card-body">
                                    <h4 className="card-title">Simply cashout!</h4>
                                    <p className="card-text">Accept bookings and earn money</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </section> 
                          
{/*
                <div classNameName="fourthSection">
                    <h2>How does Kidian Work</h2>
                    
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="find">
                                        <h2>Parents find your business</h2>
                                        <p>Kidian helps you create awareness and reach more customers</p>
                                    </div>
                                </div>
                                
                                <div className="col-sm-6">
                                    <img className="findImg" src="/img/graphics/001.png" alt="none"/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="explore">
                                        <h2>Parents explore and book your packages</h2>
                                        <p>Set a schedule that works for your business. Pick your availability and price, and manage all the details with a convenient website.</p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <img className="exploreImg" src="/img/graphics/002.png" alt="none"/>
                                </div>            
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="cashout">
                                        <h2>Cashout</h2>
                                        <p>Accept bookings and earn money.</p>
                                    </div>
                                </div>
                                
                                <div className="col-sm-6">
                                    <img className="cashoutImg" src="/img/graphics/003.png" alt="none"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
 */}

                <section className="fifthhSection">
                    <div className="container">
                        <div className="providersContent">
                            <h2>Providers Loves Us</h2>
                            <p>
                                We'are partnering with 150+ local businesses in the Greater Atlanta area to build their business.
                            </p>
                        </div>
                    </div>
                    <img src="/img/graphics/providerlogo.png" className="provider"></img>
                </section>

                <section className="sixthSection"> 
                    <div className="row">
                        <div className="signup-steps col-lg-6">
                            <ul className="signup-lists">
                                <li>
                                    <h5>1. Creating your profile</h5> 
                                    <p>Create a page with descriptions, photos, and other details.</p>
                                </li>
                                <li>
                                    <h5>2. Submit to Kidian for review</h5> 
                                    <p>After you submit your profile, we'll review and approve it shortly.</p>
                                </li>
                                <li>
                                    <h5>3. Start getting bookings this week</h5> 
                                    <p>Once you're listed, you'll start receiving bookings on Kidian.</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="divider col-lg-6">
                            <div className="signup-form">
                                <h3 className="text-center">Join Kidian Today</h3>

                                <div className="form-group">
                                    <input type="text" className="form-control" value={this.state.business} onChange={e => this.setState({ business: e.target.value })}  placeholder="Business Name"/>
                                </div>

                                <div className="form-row">  
                                    <div className="form-group col-sm-6">
                                        <input type="text" className="form-control" value={this.setState.contactName} onChange={ e=> this.setState ({ contactName: e.target.value })} placeholder="Contact Name"/>
                                    </div>

                                    <div className="form-group col-sm-6">
                                        <input type="text" className="form-control" value={this.setState.phoneNumber} onChange={ e=> this.setState ({ phoneNumber: e.target.value })} placeholder="Phone Number"/>       
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}  placeholder="Email"/>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block"> Get Started</button> 
                            </div>
                        </div>
                    </div>
                </section>                             
            </div>          
        ) 
    } 
} 
export default Provider;