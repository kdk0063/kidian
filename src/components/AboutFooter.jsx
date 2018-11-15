import React, { Component } from "react"; 
import "../css/footers.css";

class AboutFooter extends Component{

    render (){ 
        return(        
            <div id="footer">
                <div className="footerBG">
                    <div className="footer-buttons">
                        <div className="social-links">                    
                            <a href="https://www.linkedin.com/company/28628571/" target="_blank">
                                <img className="follow" src="https://www.kidian.com/wp-content/uploads/2018/05/if_2018_social_media_popular_app_logo_linkedin_3225190.png" pagespeed_url_hash="2292234944"/>
                            </a>

                            <a href="https://www.facebook.com/kidianapp/"       rel="noreferrer" target="_blank">
                                <img className="follow" src="https://www.kidian.com/wp-content/uploads/2018/05/if_2018_social_media_popular_app_logo_facebook_3225194.png" pagespeed_url_hash="3950485700"/>
                            </a>

                            <a href="https://www.instagram.com/kidianapp/" target="_blank">
                                <img className="follow" src="https://www.kidian.com/wp-content/uploads/2018/05/if_2018_social_media_popular_app_logo_instagram_3225191.png" pagespeed_url_hash="3322666869"/>
                            </a>
                                
                            <a href="https://www.youtube.com/channel/UCT5k4Cyhd8CiX2Gpi4BLggg" target="_blank">
                                <img className="follow" src="https://www.kidian.com/wp-content/uploads/2018/05/if_2018_social_media_popular_app_logo_youtube_3225180.png" pagespeed_url_hash="3435424478"/>
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
         
        )    
    }
} 
export default AboutFooter;