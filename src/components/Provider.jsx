import React, { Component } from "react"; 
import '../css/Provider.css';

class Provider extends Component{
    state ={
        business: '',
        contactName: '',
        phoneNumber: '',
        email: '',
    }

    render(){ 
        return (
            <div id="home">     
                <section className="firstSection">
                    <div className="container">
                        <div className="row">  
                            <div className="col-lg-6 register">
                                <div className="row">  
                                    <div className="card card-body registerCard">
                                        <h3 className="text-center">Sign-Up</h3>

                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.business} onChange={e => this.setState({ business: e.target.value })}  placeholder="Business Name"/>
                                        </div>

                                        <div className="form-row">  
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" value={this.setState.contactName} onChange={ e=> this.setState ({ contactName: e.target.value })} placeholder="Contact Name"/>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" value={this.setState.phoneNumber} onChange={ e=> this.setState ({ phoneNumber: e.target.value })} placeholder="Phone Number"/>       
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}  placeholder="Email"/>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block">LET'S PARTY</button> 
                                    </div>
                                </div> 
                            </div> 

                            <div className="col-lg-6 intro">
                                <h1>"Join the party and start earning"</h1>
                                <h4>-Kidian</h4>  
                            </div>
                        </div>    
                    </div>         
                </section>

                <div className="secondSection">
                    <h2>What is Kidian Experiences</h2>
                    <p>
                        Kidian is an app that connects the best birthday party venues, entertainers, and vendors with people interested in booking birthday parties. We do this by empowering local businesses and in turn, generating new ways for people to earn, work, and live.
                    </p> 
                </div>
                    
                {/* 
                <section className="thirdSection">
                    <h2>Why Kidian</h2>
                    <div className="container contents">
                        <div className="">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                    </div>
                </section> 
                */}

                <section className="fourthSection">
                    <h2>How does Kidan Work</h2>
                    
                    <div className="row">
                        <div className="column find">
                            <h2>FIND</h2>
                            <p>Parents find your business</p>
                        </div>
                        
                        <div className="column">
                            <img className="findImg" src="/img/graphics/001.png" alt="none"/>
                        </div>
                    </div>


                    <div className="row secondRow">
                        <div className="column">
                            <img className="exploreImg" src="/img/graphics/002.png" alt="none"/>
                        </div>
                        
                        <div className="column explore">
                            <h2>EXPLORE</h2>
                            <p>Parents explore your packages and book your business</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column cashout">
                            <h2>CASHOUT</h2>
                            <p>Accept bookings and earn money</p>
                        </div>
                        
                        <div className="column">
                            <img className="cashoutImg" src="/img/graphics/003.png" alt="none"/>
                        </div>
                    </div>
                </section>

                <section className="fifthhSection">
                    <div className="fifth container">
                        <h2>Our Partners</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet
                            tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium,
                        </p>
                    </div>
                    <div className="provider"></div>
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
                                <h3 className="text-center">Sign-Up</h3>

                                <div className="form-group">
                                    <input type="text" className="form-control" value={this.state.business} onChange={e => this.setState({ business: e.target.value })}  placeholder="Business Name"/>
                                </div>

                                <div className="form-row">  
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" value={this.state.contactName} onChange={e=> this.setState ({ contactName: e.target.value })} placeholder="Contact Name"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" value={this.state.phoneNumber} onChange={e=> this.setState ({ phoneNumber: e.target.value })} placeholder="Phone Number"/>       
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}  placeholder="Email"/>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">LET'S PARTY</button> 
                            </div>
                        </div>
                    </div>
                </section>                             
            </div>          
        ) 
    } 
} 
export default Provider;