import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../css/Gmaps.css'

class GMaps extends Component{
    render() {

        return (
            <div className='mapstyle'>
                <Map google={this.props.google} zoom={14}>
                    <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
                </Map>
            </div>
        );
      }
    }
     
export default GoogleApiWrapper({
      apiKey: ("AIzaSyDehRL2mnrp5MFyxRYO9v0pItaC1IoT7EA")
})(GMaps)