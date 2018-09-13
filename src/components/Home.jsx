import React,{ Component } from 'react';
import '../css/Home.css';
import Nav from './Nav';

class Home extends Component{

    render(){
        return(
            <div>

                <div id="header">
                    <div id="welcome_text_div" className="container">
                        <p id="welcome_text"> Let's party</p>
                        <p id="welcome_under_text">Birthday party for your kids? No Problem. Kidian got you covered.</p>
                        <a href="#" id="how_it_works">
                            How It Works
                        </a>
                    </div>
                </div>
            
                <div id="first-body">
                    <div className="container"> first </div>
                </div>

                <div id="second-body">
                    <div className="container"> second </div>
                </div>

                <div id="third-body">
                    <div className="container"> third </div>
                </div>
            </div>     
        )    
    }
}
export default Home;