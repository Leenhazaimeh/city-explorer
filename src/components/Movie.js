import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';


export class Movie extends Component {

    constructor(props){
        super(props);
        this.state={
            
            error:'',
            
        }
    }
    
    
    render() {
        return (
            <div>
               
                

               
                     <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.link} />
                    <Card.Body>
                      <Card.Title>{this.props.title}</Card.Title>
                      <Card.Text>
                        Movie Description: {this.props.overview}
                      </Card.Text>
                      <Card.Text>
                      Average Votes for it : {this.props.averageVotes}
                      </Card.Text>
                      <Card.Text>
                      Total Votes for it : {this.props.totalVotes}
                      </Card.Text>
                      <Card.Text>
                      Popularity for this Movie : {this.props.popularity}
                      </Card.Text>
                      <Card.Text>
                      Realeased Date : {this.props.realeasedDate}
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                
           
                 
              
                    
            </div>
        )
    }
}

export default Movie;