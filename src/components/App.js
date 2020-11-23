import "./App.css";

import React from "react";
import mapboxgl, { Map } from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVhbmRyb2ZhaHVyIiwiYSI6ImNqemJpeHAzdzAwcXgzbW1ub2p5YXlxZWwifQ.0jquNUq8yTAfeiVV6SDVkg";

class App extends React.Component {
  state = {
    lgn: -122.656563,
    lat: 49.103569,
    zoom: 10,
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lgn, this.state.lat],
      zoom: this.state.zoom,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([this.state.lgn, this.state.lat])
      .addTo(map);
  }

  render() {
    return (
      <div
        ref={(elemet) => {
          this.mapContainer = elemet;
        }}
        className="mapContainer"
      >
        App Component
      </div>
    );
  }
}

export default App;
