import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 35.095192,
            lng: 33.203430
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            // libraries:['places', 'geometry', 'drawing', 'visualization']


            >
                <AnyReactComponent
                    lat={35.095192}
                    lng={33.203430}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}
