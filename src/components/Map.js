import React, { Component } from "react";
// import Image from 'react-bootstrap/Image';

export class Map extends Component {
  render() {
    return (
      <div>
        <img
          className="map"
          src={`https://locationiq.com/docs-html/images-maps/streets.png`}
          alt=""
        />
      </div>
    );
  }
}

export default Map;