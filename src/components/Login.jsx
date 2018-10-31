import React, { Component } from "react"; 
import '../css/Login.css';

class Login extends Component{

    render(){
        return(
            <div>
                <div class="d-md-flex h-md-100 align-items-center">

                    <div class="col-md-7 p-5 pb-5 bg-indigo h-md-100">
                        <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center"> 
                        </div>
                    </div>

                    <div class="col-md-5">
                        <div class="d-md-flex align-items-center justify-content-center">
                            <form className="loginInput">
                                <div className="welcomeText">
                                    <h1> Sign In</h1>
                                    <small>Sign Into Your Kidian Account. Let's Party!</small>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Username or Email &nbsp;
                                    <span class="text-danger">*</span>
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1"> Password &nbsp;
                                    <span class="text-danger">*</span>
                                    </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                
                                <div>
                                    <button type="submit" class="btn btn-block btn-primary">Submit</button>
                                </div>

                                <br></br>

                                 <div class="text-inverse">Not a member yet? Click&nbsp;<a ui-sref="register" class="text-success" href="/register">here</a>&nbsp;to register.</div>

                                <div class="text-inverse">Forgot your password? Click&nbsp;<a ui-sref="resetPassword" class="text-success" href="/resetPassword">here</a>&nbsp;to reset password.</div>

                                <hr></hr>

                                <p class="text-center">© Kidian All Right Reserved 2018</p>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Login;