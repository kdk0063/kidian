import React, { Component } from "react";
import '../css/Login.css';

class Login extends Component{
    constructor(){
        super();

        this.state = {
             colorChange: true
        }
   }

   changeColor(){
       this.setState({colorChange: !this.state.colorChange})
   }

   render(){
       let btn_class = this.state.colorChange ? "like-button" : "liked";

       return (
            <div>
                <button className={btn_class}
                        onClick={this.changeColor.bind(this)}>
                          Button
                 </button>
            </div>
       )
   }
}
export default Login;
