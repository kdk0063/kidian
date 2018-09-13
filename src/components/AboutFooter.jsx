import React, { Component } from "react"; 

class AboutFooter extends Component{ 
    render (){ 
        return(
            <div className="container">
                <div className="row mtx text-center">
                    <div className="col-md-10 col-md-offset-1 ">  
                        <div className="footer-buttons clearfix">
                            <div className="social-links mtm mbm">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <img alt="Twitter" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/twitter%402x.png" data-at2x="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/twitter%402x.png" width="28" height="23" />
                                </a>

                                <a href="#" target="_blank" rel="noreferrer">
                                    <img alt="LinkedIn" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/linkedin%402x.png" data-at2x="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/linkedin%402x.png" width="28" height="26" />
                                </a>

                                <a href="#" target="_blank" rel="noreferrer">
                                    <img alt="Facebook" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/facebook%402x.png" data-at2x="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/facebook%402x.png" width="15" height="30" />
                                </a>

                                <a href="#" target="_blank" rel="noreferrer">
                                    <img alt="Instagram" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/instagram%402x.png" data-at2x="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/instagram%402x.png" width="32" height="32" />
                                </a>

                                <a href="#" target="_blank" rel="noreferrer">
                                    <img alt="Email" className="social-icon" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/email%402x.png" data-at2x="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/social/email%402x.png" width="34" height="24" />
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )    
    }
} 
export default AboutFooter;