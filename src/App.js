import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Weather from './components/Weather';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      display:false,
      locationData:'',
      errorMessege:false,
      forcastData:[],
      error:'',
    }
  }
  renderCity = async (event) =>{
    event.preventDefault();
    let cityChoosed= event.target.cityName.value;
    console.log(cityChoosed);
    let cityUrl = `http://us1.locationiq.com/v1/search.php?key=pk.8694532b1962aa7901ba7712fd7818b9&q=${cityChoosed}&format=json`; //result will be data in json file
    
    try {
      let locationResult = await axios.get(cityUrl);
    console.log(locationResult.data);
    this.setState({
      locationData: locationResult.data[0],
      display:true,
      errorMessege:false,
      error:'',
    })
  }
  catch(error) {
   this.setState({
    errorMessege:true,
    error:`error is ${error}`,

   })

  }
  this.displayingWeather();
  }
  displayingWeather= async()=>{
    let weatherUrl= `http://localhost:3001/weather?lon=${this.state.locationData.lon}&lat=${this.state.locationData.lat}`;
    try{
    
        let weatherResult = await axios.get(weatherUrl);
      console.log(weatherResult.data);

      this.setState({
        forcastData: weatherResult.data,
       
      })
    }
   catch(error){
    this.setState({
     
      error:`error is ${error}`,
  
  
     })
     
   }
  }
  render(){
    return (
     <div>
       <h1>Explore the Map of Any City You Want </h1>

                    <Form  onSubmit={this.renderCity}  >
                <Form.Group className="city-finder" controlId="cityName">
                  <Form.Label>Choose the city you want to Veiw the map for</Form.Label>
                  <Form.Control defaultValue='' type="text" placeholder="Enter The City Name" /> 
                </Form.Group>

                <Button variant="primary" type="submit">
                  Explore
                </Button>
              </Form>
                { this.state.display && !(this.state.errorMessege) &&
                 <div> 
                  <ListGroup> 
                  <ListGroup.Item>{this.state.locationData.display_name}</ListGroup.Item>
                  <ListGroup.Item>{this.state.locationData.lon}</ListGroup.Item>
                  <ListGroup.Item>{this.state.locationData.lat}</ListGroup.Item>
                  
                    </ListGroup>
                     
                    <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.8694532b1962aa7901ba7712fd7818b9&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt='map' fluid />
                    </div>}
                
                 { this.state.errorMessege && <Alert variant="danger">
                  <Alert.Heading>Oh snap! You got an error! Status Code :400</Alert.Heading>
                  <p>
                  Make sure you have entered a city Name or Change the Name of the City you have entered and try again.
                  </p>
                  <p>
                  {this.state.error}
                  </p>
                </Alert>}
                <Weather forcastData={this.state.forcastData} latData={this.state.locationData.lat} lonData={this.state.locationData.lon}/>
                {/* <Button variant="primary" type="submit" onClick={this.displayingWeather}>
                 Explore Weather Forcast 
                </Button> */}
     </div>

    )
  }
}

export default App;




//src={`https://maps.locationiq.com/v3/staticmap?key=pk.3bce857e7f116dcdee31f7b3fb42cc23&q&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`}


//const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.c98c5a5eaed3e8c5599b633879a6f7b6&q=${this.state.cityName}&format=json`);