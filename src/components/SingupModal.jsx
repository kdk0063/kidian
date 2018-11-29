import React, { Component } from 'react';
import '../css/SignupModal.css';

class SignupModal extends Component{

render(){
    return(
        <div id="signupModal" className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-title">
                        <h4>Sign up Today</h4>
                    </div>

                    <div className="modal-body">
                        <div className="input-group mb-4">
                            <input type="text" className="form-control" placeholder="Your name" aria-label="Your name" aria-describedby="basic-addon1"/> 
                        </div>

                        <div className="input-group mb-4">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/> 
                        </div>

                        <div className="input-group mb-4">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> 
                        </div>

                        <div className="input-group mb-4">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/> 
                        </div>

                        <div className="pormoContent">
                            We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.
                        </div>

                        <button type="button" className="btn btn-block btn-primary signupBtn">Sign up</button>
                    </div>

                    <div className="modal-footer justify-content-center">
                        <p>Already have an account?&nbsp;<a href="/Login">Login</a></p>
                    </div>
                </div>
            </div>
        </div>   
    )
    }
}
export default SignupModal;