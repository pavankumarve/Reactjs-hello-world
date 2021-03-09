import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {
    render() {
        return (
            <div>
            
                <h1>Map</h1>
              <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>  
            </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAae8ILJgWixrk82z_jEocToL90rrdzLHg')
})(GoogleMap)

// initially we need to create new project in google cloud platform and copy the credentials and enable the maps javascript api in  enable apis in Dashboard