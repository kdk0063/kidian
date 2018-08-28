import React, { Component } from "react"; 
import '../css/footer-basic-centered.css';

class AboutFooter extends Component{ 
    render (){ 
        return(
            <div>
                <footer className="footer-basic-centered">

                    <div className="footer-left">

                        <h3>Company
                            <span>logo</span>
                        </h3>

                        {/* <p className="footer-links">
                            <a href="#">Home</a>
                            ·
                            <a href="#">Blog</a>
                            ·
                            <a href="#">Pricing</a>
                            ·
                            <a href="#">About</a>
                            ·
                            <a href="#">Faq</a>
                            ·
                            <a href="#">Contact</a>
                        </p> */}                       
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p>
                                <span>21 Revolution Street</span> Paris, France</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>+1 555 123456</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p>
                                <a href="mailto:support@company.com">support@company.com</a>
                            </p>
                        </div>

                    </div>

                    <div className="footer-right">                    
                        <div className="footer-icons">
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>

                        <p className="footer-company-name">Company Name &copy; 2015</p>
                    </div>

                </footer>

            </div>

        )    
    }
} 
export default AboutFooter;