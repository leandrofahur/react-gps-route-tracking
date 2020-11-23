import "./App.css";

import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVhbmRyb2ZhaHVyIiwiYSI6ImNqemJpeHAzdzAwcXgzbW1ub2p5YXlxZWwifQ.0jquNUq8yTAfeiVV6SDVkg";

class App extends React.Component {
  state = {
    lng: -74.005974,
    lat: 40.712776,
    zoom: 10,
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    const marker = new mapboxgl.Marker({
      anchor: "left",
      color: "red",
      draggable: true,
    })
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(map);

    // let geolocate = new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //     enableHighAccuracy: true,
    //   },
    //   trackUserLocation: true,
    // });

    // map.addControl(geolocate, "top-left");
    // map.on("load", () => {
    //   geolocate.trigger();
    // });

    // map.on("mousemove", (e) => {
    //   console.log(JSON.stringify(e.lngLat.wrap()));
    // });
  }

  render() {
    return (
      <div
        ref={(element) => {
          this.mapContainer = element;
        }}
        className="mapContainer"
      >
        App Component
      </div>
    );
  }
}

export default App;
