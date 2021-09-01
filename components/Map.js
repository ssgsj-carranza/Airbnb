import React from 'react'
import ReactMapGL from 'react-map-gl';

function Map() {
    return (
        <ReactMapGL
            mapStyle='mapbox://styles/ssgsj-carranza/ckt0ritab02o917k71u8sjv2i'
            mapboxApiAccessToken={process.env.mapbox_key}
        >

        </ReactMapGL>
    )
}

export default Map;
