import React, { Component } from "react"; 
import '../css/Login.css';

class Login extends Component{

    render(){
        return(
            <div id="loginPage">
                <div className="d-md-flex h-md-100 align-items-center">

                    <div className="col-md-7 p-5 pb-5 bg-indigo h-md-100">
                        <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center"> 
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="d-md-flex align-items-center justify-content-center">
                            <form className="loginInput">
                                <div className="welcomeText">
                                    <h1> Sign In</h1>
                                    <small>Sign Into Your Kidian Account. Let's Party!</small>
                                </div>

                                <div className="form-group">
                                    <label>Username or Email &nbsp;
                                    <span className="text-danger">*</span>
                                    </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label> Password &nbsp;
                                    <span className="text-danger">*</span>
                                    </label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                
                                <div>
                                    <button type="submit" className="btn btn-block btn-primary">Submit</button>
                                </div>

                                <br></br>

                                 <div className="text-inverse">Not a member yet? Click&nbsp;<a ui-sref="register" className="text-success" href="/register">here</a>&nbsp;to register.</div>

                                <div className="text-inverse">Forgot your password? Click&nbsp;<a ui-sref="resetPassword" className="text-success" href="/resetPassword">here</a>&nbsp;to reset password.</div>

                                <hr></hr>

                                <p className="text-center">© Kidian All Right Reserved 2018</p>
                            </form>
                        </div>
                    </div>
 
                </div>
            </div>
        )
    }
}
export default Login;