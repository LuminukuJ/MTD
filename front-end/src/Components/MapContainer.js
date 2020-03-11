import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '70.5vh'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [
                { latitude: 48.750000, longitude: 2.400000 },
                { latitude: 48.8490721, longitude: 2.4749347 },
                { latitude: 48.7771486, longitude: 2.4530731 },
                { latitude: 48.6901705, longitude: 2.3837241 },
                { latitude: 48.817399, longitude: 1.9476363 },
                { latitude: 48.935773, longitude: 2.3580232 }]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={{
                    lat: 48.864716,
                    lng: 2.349014
                }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
})(MapContainer);