import React, { Component } from "react"; 
import "../css/footers.css";

class AboutFooter extends Component{

    render (){ 
        return(        
            <div className="container-fluid">
                <div className="footerBG row">
                    <div className="footer-buttons">
                        <div className="social-links">                    
                            <a href="#" target="_blank" rel="noreferrer">
                                <img alt="LinkedIn" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/linkedin%402x.png" width="28" height="26" />
                            </a>

                            <a href="#" target="_blank" rel="noreferrer">
                                <img alt="Facebook" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/facebook%402x.png"  width="15" height="30" />
                            </a>

                            <a href="#" target="_blank" rel="noreferrer">
                                <img alt="Instagram" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/instagram%402x.png" width="32" height="32" />
                            </a>

                            <a href="#" target="_blank" rel="noreferrer">
                                <img alt="Email" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/email%402x.png" width="34" height="24" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
         
        )    
    }
} 
export default AboutFooter;