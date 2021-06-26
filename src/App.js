  

import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSearch from './components/SearchForm';
import AlertMess from './components/AlertMessage';
import Map from './components/Map';
import CityData from './components/CityData'
import Weather from './components/Weather'
import Movie from './components/Movies';
import Footer from './components/Footer'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      cityNme:'',
      cityDat:{},
      displayD: false,
      lat:'',
      lon:'',
      alert:false,
      error:'',
      weatherData:'',
      movieData:''
     
    }
  }

  updateCityName = (e) =>{
    // console.log(e.target.value);
    this.setState({
      cityNme:e.target.value,

    });
  }
  

  getCity=async(e)=>{
    e.preventDefault();
  try{
    await axios.get(`http://us1.locationiq.com/v1/search.php?key=pk.8694532b1962aa7901ba7712fd7818b9&q=${this.state.cityNme}&format=json`).then(locatioIqRes=>{

      this.setState({
        cityDat:locatioIqRes.data[0],
        lat:locatioIqRes.data[0].lat,
        lon:locatioIqRes.data[0].lon,
      })
      axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherReponse=>{
        this.setState({
          weatherData: weatherReponse.data,
          // displayD:true,
          alert:false
        });
        axios.get(`${process.env.REACT_APP_URL}/movies?qurey=${this.state.cityNme}`).then(movieRes=>{
         console.log('movieRes', movieRes);
          this.setState({

            movieData:movieRes.data,
             displayD:true
          })
        })

      })
     
    }); 
  }  catch(error){
      this.setState({
        error:error.message,
        alert:true,
       
      })
  }
   
  
   }

  

  

  render(){
    return (

    
      <div style={{margin : 'auto',background:'#CDF0EA'}}>
        {this.state.alert &&
        <AlertMess 
        error={this.state.error}
        />
      }
      <div>
      <FormSearch
          getCity={this.getCity}
          updateCityName={this.updateCityName}
          gitMovie={this.gitMovie}
          />
           
          {(this.state.displayD) && 
            <div style={{}}>
               {/*  The Map  */}
              <Map
              cityDat={this.state.cityDat}
              />
               {/*  City Data  */}
              <CityData
              cityDat={this.state.cityDat}
              />
              {/*  Weather Data  */}
              <div>
              <Weather 
            weather={this.state.weatherData}
            />
              </div>
               
            {/* movie Data */}
           <Movie

              movieData={this.state.movieData}
           />
            </div>
          }
            
          <Footer/>
      </div>
                   
        </div>
         
    );
  }
    
  
  
}

export default App;

//src={`https://maps.locationiq.com/v3/staticmap?key=pk.3bce857e7f116dcdee31f7b3fb42cc23&q&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`}


//const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.c98c5a5eaed3e8c5599b633879a6f7b6&q=${this.state.cityName}&format=json`);
//WEATHER_BIT_KEY=pk.d36871f015649f915282f374cff76628