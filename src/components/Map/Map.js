import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';


function Mapp() {
    return  <GoogleMap 
    defaultZoom ={10} 
    defaultCenter = {{lat: 21.4285 ,lng:91.9702}}></GoogleMap>
}

const MapWrapped = withScriptjs(withGoogleMap(Mapp));

const Map = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
        
            <MapWrapped
         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDsXYQXED8IyzREyQvtcLKOtrrvupzpwKA`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
        </div>
    );
};

export default Map;