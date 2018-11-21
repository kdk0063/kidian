import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../css/Gmaps.css'

class GMaps extends Component{

    fetchPlaces(mapProps, map) {
        const {google} = mapProps;
        const service = new google.maps.places.PlacesService(map);
      }
      

    onMarkerClick(props, marker, e) {
    
    }




    render() {
        
        const style={
            width: '200px',
            height: '100vh'
        }

        return (
            <div>
                <Map google={this.props.google}
                    style={{width: '150px', height: '80%',}}
                    zoom={12}>
              
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
                <Marker
                    name={'Dolores park'}
                    position={{lat: 37.759703, lng: -122.428093}} />
                <Marker />
                </ Map>
               {/* 
                
                google={this.props.google} zoom={12}>
                    <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
               

                <Marker
                    title={'Kidian Office.'}
                    name={'Kidian'}
                    position={{lat: 33.8480075, lng: -84.37145509999999}} />
               */}
                
            </div>
        );
      }
    }
     
export default GoogleApiWrapper({
      apiKey: ("AIzaSyDehRL2mnrp5MFyxRYO9v0pItaC1IoT7EA")
})(GMaps)