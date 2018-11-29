import React, { Component } from 'react';
import '../css/DetailInfo.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import isAfter from 'date-fns/isAfter';

class DetailInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          endDate: new Date()
        };
      }
    
      handleChange = ({ startDate, endDate }) => {
        startDate = startDate || this.state.startDate;
        endDate = endDate || this.state.endDate;
    
        if (isAfter(startDate, endDate)) {
          endDate = startDate;
        }
    
        this.setState({ startDate, endDate });
      };
    
      handleChangeStart = startDate => this.handleChange({ startDate });
    
      handleChangeEnd = endDate => this.handleChange({ endDate });

    render(){
        return(
            <div id='detailInfoPage'>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ul className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 h-300" src="/img/photos/c-1.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 h-300" src="/img/photos/c-2.jpg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 h-300" src="/img/photos/c-3.jpg" alt="Third slide"/>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="container">
                    <div className="row">            
                        <div className="col-7">
                            <h4>HELLO</h4>
                            <section id="generalInfo"> 
                                <article className="module-block">   
                                    <h5>General Info Heading</h5>    
                                    <p> Cupcake ipsum dolor. Sit amet sweet roll icing cupcake ice cream sugar plum. Danish I love biscuit carrot cake tart jelly beans candy. Chupa chups chocolate bar I love pie ice cream brownie gummi bears.</p>
                                </article>
                            </section>

                            <hr></hr>

                            <section id="detailInfo" className="module-block">                 <h5>Article Title</h5>
                                
                                <p>Cupcake ipsum dolor. Sit amet sweet roll icing cupcake ice cream sugar plum. Danish I love biscuit carrot cake tart jelly beans candy. Chupa chups chocolate bar I love pie ice cream brownie gummi bears. Soufflé cookie I love gummi bears faworki sweet sweet tart croissant. Muffin bonbon danish wafer candy macaroon I love dessert.    
                                <a href="#">Read full article &rarr;</a></p>
                            </section>

                             <hr></hr>

                            <section id="packages">
                                <h5> Service Packages</h5>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="card">
                                                icons here
                                                <p>Package 1</p>
                                                <p> blah blah blah</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <div className="card">
                                                icons here
                                                <p>Package 2</p>
                                                <p> blah blah blah</p>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="card">
                                                icons here
                                                <p>Package 3</p>
                                                <p> blah blah blah</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <hr></hr>

                            <section id="ratings">
                                <div className="row">
                                    <div className="col-md-5"><h5> 300 Reviews </h5></div>
                                    
                                    <div className="col-md-3">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                    </div>
                                </div>
                         
                            </section>

                            <hr></hr>

                            <section id="userReviews">
                            <div className="row">
                                <div id="userComments" className="col-xs-12 col-sm-11 col-md-11">
                                    <div className="client_testimonial">
                                        <div className="pic">
                                            <img src="/img/photos/c-3.jpg" />
                                        </div>
                                        <div className="client_info">
                                            <h2 className="title">Andrew</h2>
                                            <small className="post">Web Developer</small>
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar.</p>
                                        </div>
                                    </div>            
                                </div>

                                <div id="userComments" className="col-xs-12 col-sm-11 col-md-11">
                                    <div className="client_testimonial">
                                        <div className="pic">
                                            <img src="/img/photos/c-3.jpg" />
                                        </div>
                                        <div className="client_info">
                                            <h2 className="title">Andrew</h2>
                                            <small className="post">Web Developer</small>
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar.</p>
                                        </div>
                                    </div>            
                                </div>

                                <div id="userComments" className="col-xs-12 col-sm-11 col-md-11">
                                    <div className="client_testimonial">
                                        <div className="pic">
                                            <img src="/img/photos/c-3.jpg" />
                                        </div>
                                        <div className="client_info">
                                            <h2 className="title">Andrew</h2>
                                            <small className="post">Web Developer</small>
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar.</p>
                                        </div>
                                    </div>            
                                </div>
                            </div>
                            </section>

                            <hr></hr>

                            <section id="userUploads">
                                user pictures

                            </section>

                            <hr></hr>
                        </div>

                        <div className="col-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="Dates">Dates</label>
                                <div className='calendar'>
                                    <div className='calendar'>
                                        <DatePicker
                                            selected={this.state.startDate}
                                            selectsStart
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            onChange={this.handleChangeStart}
                                        />

                                        <DatePicker
                                            selected={this.state.endDate}
                                            selectsEnd
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            onChange={this.handleChangeEnd}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Example multiple select</label>
                                <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                </select>
                            </div>

                            <div className="form-group">
                                Number of Guests
                            </div>

                    
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>


                        </div>

                    </div>
                </div>

                         
            </div>
        )
    }
}
export default DetailInfo