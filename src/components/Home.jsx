import React, { Component } from "react"; 
import '../css/Home.css';


class Home extends Component{ 

    render (){ 
        return (
            <div id="home">

                <section className="container firstSection">                 
                    <div className="row">  
                        <div className="col-lg-6 intro">
                            <h1>"More business out the door than inside"</h1>
                            <p>-Amir Hosseini, Curry UP Now</p>  
                        </div>

                        <div className="container col-lg-6 register">
                            <div className="row">                            
                                <div className="card card-body registerCard">
                                    <h3 className="text-center">Sign-Up</h3>

                                    <div className="form-group">
                                        <input type="text" className="form-control" id="businessName" placeholder="Business Name"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" id="address" placeholder="Address"/>
                                    </div>

                                    <div className="form-row">  
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="contactName" placeholder="Contact Name"/>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number"/>
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
                </section>

                <section className="container secondSection">
                    <h2>What is Kidian Experiences</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet
                        tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium,
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
        
                <section className="fourthSection">
                    <h2>How does Kidan Work</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet
                        tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium,
                    </p>
                </section>

                <section className="fifthhSection">
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
export default Home;