import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export class FormSearch extends Component {
    render() {
        return (
            <div style={{ display: 'grid', 'grid-template-columns': '1fr 2fr', 'grid-gap': '10em', padding: '5%'  }}>
                 <Form onSubmit={this.props.getCity} style={{ border: '1px solid', padding: '1em' }}>
            <Form.Group>
            <Form.Label> City Name </Form.Label>
            <Form.Control onChange={this.props.updateCityName} type='test'></Form.Control>
            <br></br>
            <Button className="button" variant="danger" type="submit">
            Explore!
          </Button>
            </Form.Group>
            
          </Form>
            </div>
        )
    }
}

export default FormSearch