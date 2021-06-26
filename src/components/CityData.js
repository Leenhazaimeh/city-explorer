import React, { Component } from 'react'

export class CityData extends Component {
    render() {
        return (
            <div style={{margin: '70px 60px'}}>
               <p>
                {this.props.cityDat.display_name}
              </p>
              <p>{this.props.cityDat.lat}</p>
            <p>{this.props.cityDat.lon}</p><br></br>
            </div>
        )
    }
}

export default CityData