import React, { Component } from 'react';
import '../css/ResetPw.css';

class ResetPw extends Component{

    render(){
        return(
            <div id="resetPage">
                <div className="d-md-flex h-md-100">

                    <div className="col-md-7 p-5 pb-5 bg-indigo h-md-100">
                        <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center"> 
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="d-md-flex justify-content-center">
                            <form className="pwInput">
                                <div className="welcomeText">
                                    <h2>Reset Your Password</h2>
                                </div>

                                <div className="form-group">
                                    <small>Enter Your Email Address</small>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>

                                <div>
                                    <button type="submit" className="btn btn-block btn-primary">Reset Password</button>
                                </div>

                                <div class="m-t-20 m-b-20 p-b-20 text-inverse">Already a member? Click &nbsp;<a href="login">here</a>&nbsp; to login.
                                </div>


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
export default ResetPw;