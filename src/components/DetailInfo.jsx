import React, { Component } from 'react';
import '../css/DetailInfo.css';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class DetailInfo extends Component{
    constructor(props) {
        super(props);
        this.state ={
          date: null,
          focused: null
        }
      }

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
                        <div className="col-md-7">
                            <h4>Painting with a Twist Buckhead</h4>
                            <section id="generalInfo"> 
                                <article className="module-block">   
                                    <h5>Category</h5>    
                                    <p> Cupcake ipsum dolor. Sit amet sweet roll icing cupcake ice cream sugar plum. Danish I love biscuit carrot cake tart jelly beans candy. Chupa chups chocolate bar I love pie ice cream brownie gummi bears.</p>
                                </article>
                            </section>

                            <hr></hr>

                            <section id="detailInfo" className="module-block">
                                <p>Cupcake ipsum dolor. Sit amet sweet roll icing cupcake ice cream sugar plum. Danish I love biscuit carrot cake tart jelly beans candy. Chupa chups chocolate bar I love pie ice cream brownie gummi bears. Soufflé cookie I love gummi bears faworki sweet sweet tart croissant. Muffin bonbon danish wafer candy macaroon I love dessert.    
                                <a href="#">Show More &rarr;</a></p>
                            </section>

                             <hr></hr>

                            <section id="packages">
                                <h5>Service Packages</h5>
                                <div className="container">
                                    <div className="row">
                                        <div id="businessPackages" className="col-md-12">
                                            <div className="card">                                  
                                                <strong className="packageName">2 Hour Party Package</strong>
                                                <strong className="packageCategory">Age 5 - 12</strong>
                                                <strong className="price">$300</strong>
                                                <ul>
                                                    <li>
                                                        This party time includes 30 mintues of
                                                    </li>
                                                    <li>
                                                        Parties are $25 per person
                                                    </li>
                                                    <li>
                                                        Choose your Own
                                                    </li>
                                                </ul> 
                                            </div>
                                        </div>
                                        
                                        <div id="businessPackages" className="col-md-12">
                                            <div className="card">
                                                <strong className="packageName">2 Hour Party Package</strong>
                                                    <strong className="packageCategory">Age 5 - 12</strong>
                                                    <strong className="price">$300</strong>
                                                    <ul>
                                                        <li>
                                                            This party time includes 30 mintues of
                                                        </li>
                                                        <li>
                                                            Parties are $25 per person
                                                        </li>
                                                        <li>
                                                            Choose your Own
                                                        </li>
                                                    </ul> 
                                            </div>
                                        </div>

                                        <div id="businessPackages" className="col-md-12">
                                            <div className="card">
                                                <strong className="packageName">2 Hour Party Package</strong>
                                                    <strong className="packageCategory">Age 5 - 12</strong>
                                                    <strong className="price">$300</strong>
                                                    <ul>
                                                        <li>
                                                            This party time includes 30 mintues of
                                                        </li>
                                                        <li>
                                                            Parties are $25 per person
                                                        </li>
                                                        <li>
                                                            Choose your Own
                                                        </li>
                                                    </ul> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                        <div id="booking" className="col-md-5">
                            <form className='sticky'>
                                <div className="card">
                                    <div className="card-body">
                                        
                                        <strong> $149 <small>Total Price</small></strong>

                                        <hr></hr>

                                        {/* Dates */}
                                        <div className="form-group">
                                            <div><small>Dates</small></div>
                                                <DateRangePicker
                                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                                />
                                        </div>
                                    
                                         {/* Packages*/}
                                        <div className="form-group">
                                            <div><small>Packages</small></div>
                                            <div className="packagesOptions">
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /> 1
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/> 2
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" /> 3
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                         {/* Guests */}
                                        <div className="form-group">
                                            <div><small>Guests</small></div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <span className="form-label">Adults (18+)</span>
                                                        <select className="booking-form form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                        <span className="select-arrow"></span>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <span className="form-label">Children (0-17)</span>
                                                        <select className="booking-form form-control">
                                                            <option>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                        <span className="select-arrow"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block">Book it!</button>
                                        
                                        <small className="smallText">You won’t be charged yet</small>
                                        
                                        <hr></hr>

                                        <small className="kGuarntee">Kidian Guarantee</small>  
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="container">
                            <hr></hr>

                            <section id="ratings">
                                    <div className="row">
                                        <div className="col-md-3"><h5> 300 Reviews </h5></div>
                                        
                                        <div className="col-md-2">
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
                                <div className="gallery">
                                    <div className="gallery-item">
                                        <img className="gallery-image" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" />
                                    </div>

                                    <div className="gallery-item">
                                        <img className="gallery-image" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop" />
                                    </div>

                                    <div className="gallery-item">
                                        <img className="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" />
                                    </div>

                                    <div className="gallery-item">
                                        <img className="gallery-image" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" />
                                    </div>

                                    <div className="gallery-item">
                                        <img className="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" />
                                    </div>

                                    <div className="gallery-item">
                                        <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" />
                                    </div>
                                </div>


                            </section>

                            <hr></hr>
                        </div>
                    </div>
                </div>
           
            </div>
        )
    }
}
export default DetailInfo;