import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";


import AlertMessage from "./components/AlertMessage";
import SearchForm from "./components/SearchForm";
import CityData from "./components/CityData";
import Map from "./components/Map";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      displayData: false,
      error: false,
    };
  }

  updateCityNameState = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  getCityData = async (e) => {
    e.preventDefault();
    try {
      const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.46e803cf9db0a794404df1876dc3411b&q=${this.state.cityName}&format=json`);
      this.setState({
        cityData: axiosResponse.data[0],
        displayData: true,
        error: false,
      });
    } catch {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div>
        <Header />

        <SearchForm
          getCityData={this.getCityData}
          updateCityNameState={this.updateCityNameState}
        />

        {(this.state.error && <AlertMessage error={this.state.error} />) ||
          (this.state.displayData && (
            <div>
              <Map cityData={this.state.cityData} />

              <CityData cityData={this.state.cityData} />
            </div>
          ))}

        <Footer />
      </div>
    );
  }
}

export default App;
