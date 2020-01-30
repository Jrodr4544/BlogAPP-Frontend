import React from 'react'; 
import { Card } from 'react-bootstrap';

const About = () => {
    return (
    <div className="App">
        <h1>
            About Page
        </h1>
        <Card className="panelText">
          <Card.Body>
            <Card.Title>Mission Statement:</Card.Title>
            <Card.Text>
                Random Text....
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
    )
}


export default About