import React from 'react';
import MarkerClusterer from './MarkerClusterer';
import defaultMapConfiguration from './defaultMapConfiguration';
import marker from './marker';

/* global global */

export default React.createClass({
    render() {
        return <div className='hotels-on-map'></div>;
    },

    componentDidMount() {
        const maps = global.window.google.maps;
        const map = new maps.Map(this.getDOMNode(), defaultMapConfiguration());

        new MarkerClusterer(map, this.markers());
    },

    markers() {
        return this.props.hotels.map(({geolocation}) => marker(geolocation));
    }
});
