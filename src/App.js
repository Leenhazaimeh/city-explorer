import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityInfo: {},
      displayInfo: false,
    };
  }
  updateCityNameState = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };
  getCityData = async (e) => {
    e.preventDefault();
    const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.c98c5a5eaed3e8c5599b633879a6f7b6&q=${this.state.cityName}&format=json`);
    
    this.setState({
      cityInfo: axiosResponse.data[0],
      displayInfo: true,
    });
  };
  render() {
    return (
      <div className='body'>
        <Header />
        <Form onSubmit={this.getCityData} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >City:</Form.Label>
            <Form.Control
              onChange={this.updateCityNameState}
              type="text"
              placeholder="write the city name"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button className="button" variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
        {this.state.displayInfo && (
          <div className='result'>
            <p className="city1">{this.state.cityInfo.display_name}</p>
            <p className="city">{this.state.cityInfo.lat}</p>
            <p className="city">{this.state.cityInfo.lon}</p>
            <img
              className="map"
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.3bce857e7f116dcdee31f7b3fb42cc23&q&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`}
              alt=""
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
export default App;
