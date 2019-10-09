import React from 'react';
import {Card} from 'react-bootstrap';

const HelpSummary=({help})=>{
        return(
            <Card >
                <Card.Body>
                    <Card.Title>{help.name}</Card.Title>
                    <Card.Text>Date:{help.dateTime}</Card.Text>
                </Card.Body>
            </Card>
        )
}

export default HelpSummary;