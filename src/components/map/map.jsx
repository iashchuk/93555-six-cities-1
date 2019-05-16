import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {city, leaflet} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/icon-pin.svg`,
      iconSize: [30, 30]
    });

    const zooms = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: zooms,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zooms);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(map);
  }

  render() {
    return <div id="map" style={{height: 1000}} />;
  }
}

export default Map;
