import React from 'react';
import { StaticGoogleMap, Marker } from 'react-static-google-map';

const MapContainer = () => {
    return (
        <div>
            <StaticGoogleMap size="200x200" className="img-fluid" apiKey="AIzaSyCU6qEdnNN2J09rzDRsVBKProLjEfaQgR8">
                <Marker location="36.85413801585305,10.263616836230094" color="blue" label="P" />
            </StaticGoogleMap>
        </div>

    )
}

export default MapContainer;