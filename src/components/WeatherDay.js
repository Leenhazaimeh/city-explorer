import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'

export class WeatherDay extends Component {
    render() {
        return (
            <Card
                bg="info"
                text="dark"
                style={{ width: '18rem' , margin: "21px" }}
                className="mb-2"
            >
                <Card.Header>Weather Day</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.description}</Card.Title>
                    <Card.Text>
                        {this.props.date}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default WeatherDay