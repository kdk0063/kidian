import React,{ Component } from 'react';
import '../css/Home.css';
import HomeComp from './HomeComp';


class Home extends Component{

    render(){
        return(
            <div>
                {/* 
                <div id="header">
                    <div id="welcome_text_div" className="container">
                        <p id="welcome_text"> Let's party</p>
                        <p id="welcome_under_text">Birthday party for your kids? No Problem. Kidian got you covered.</p>
                        <a href="/provider" id="how_it_works">
                            How It Works
                        </a>
                    </div>
                </div>
                */}

                <div id="first-body">
                    <HomeComp> </HomeComp>
                </div>
                
                

            </div>     
        )    
    }
}
export default Home;