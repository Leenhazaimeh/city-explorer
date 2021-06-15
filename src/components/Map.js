import React, { Component } from "react";


export class Map extends Component {
  render() {
    return (
      <div>
        <img
          className="map"
          src={`https://maps.locationiq.com/v3/staticmap?key=pk.c98c5a5eaed3e8c5599b633879a6f7b6&q=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`}
         
          alt=""
        />
      </div>
    );
  }
}

export default Map;

//const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.c98c5a5eaed3e8c5599b633879a6f7b6&q=${this.state.cityName}&format=json`);