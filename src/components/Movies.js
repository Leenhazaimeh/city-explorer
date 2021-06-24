import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';


export class Movies extends Component {

    constructor(props){
        super(props);
        this.state={
            
            error:'',
            
        }
    }
    
    
    render() {
        return (
            <div>
               
                

                { this.props.moviesData.map(item=>{
                    return ( <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.link} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        Movie Description: {item.overview}
                      </Card.Text>
                      <Card.Text>
                      Average Votes for it : {item.averageVotes}
                      </Card.Text>
                      <Card.Text>
                      Total Votes for it : {item.totalVotes}
                      </Card.Text>
                      <Card.Text>
                      Popularity for this Movie : {item.popularity}
                      </Card.Text>
                      <Card.Text>
                      Realeased Date : {item.realeasedDate}
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                 )

                })}
           
                 
              
                    
            </div>
        )
    }
}

export default Movies;