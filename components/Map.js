import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/ssgsj-carranza/ckt0ritab02o917k71u8sjv2i'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ></ReactMapGL>
    )
}

export default Map;
