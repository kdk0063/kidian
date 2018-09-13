import React, { Component } from "react"; 
import '../css/Provider.css';

class Provider extends Component{
    state ={
        business: '',
        address: '',
        contactName: '',
        phoneNumber: '',
        email: ''
    }

    //onclick do something hereB

    render(){ 
        return (
            <div id="home">     
                <section className="firstSection">
                    <div className="container">
                        <div className="row firstcontent">  
                            <div className="col-lg-6 intro">
                                <h1>"Join the party and start earning"</h1>
                                <p>-Kidian</p>  
                            </div>

                            <div className="col-lg-6 register">
                                <div className="row">  
                                    <div className="card card-body registerCard">
                                        <h3 className="text-center">Sign-Up</h3>

                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.business} onChange={e => this.setState({ business: e.target.value })}  placeholder="Business Name"/>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.address} onChange={ e=> this.setState ({ address: e.target.value })} placeholder="Address"/>
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
                                            <input type="text" className="form-control" id="email" placeholder="Email" />
                                        </div>

                                        <button type="submit" className="btn btn-danger btn-block">LET'S PARTY</button> 
                                    </div>
                                </div> 
                            </div>      
                        </div>    
                    </div>         
                </section>

                <section className="container secondSection">
                    <h2>What is Kidian Experiences</h2>
                    <p>
                        Kidian is an app that connects the best birthday party venues, entertainers, and vendors with people interested in booking birthday parties. We do this by empowering local businesses and in turn, generating new ways for people to earn, work, and live.
                    </p>
                </section>
                    
                <section className="thirdSection">
                    <h2>Why Kidian</h2>
                    <div className="container contents">
                        <div className="">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                    </div>
                </section>
            
                <section className="container fourthSection">
                    <h2>How does Kidan Work</h2>
                    
                    <div className="row">
                        <div className="column find">
                            <h2>FIND</h2>
                            <p>Parents find your business</p>
                        </div>
                        
                        <div className="column">
                            <img className="findImg" src="/img/graphics/001.png" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="column explore">
                            <img className="exploreImg" src="/img/graphics/002.png" />
                        </div>
                        
                        <div className="column explore">
                            <h2>EXPLORE</h2>
                            <p>Parents explore your packages and book your business</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column cashout">
                            <h5>CASHOUT</h5>
                            <p>Accept bookings and earn money</p>
                        </div>
                        
                        <div className="column cashoutImg">
                            Img 3
                        </div>
                    </div>


                </section>

                <section className="container fifthhSection">
                    <h2>Our Partners</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet
                        tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium,
                    </p>
                </section>
                                             
            </div> 
                  
        ) 
    } 
} 
export default Provider;