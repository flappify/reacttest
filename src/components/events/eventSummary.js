import React from 'react';
import {Card} from 'react-bootstrap';

const EventSummary=({event})=>{
        return(
            <Card >
                <Card.Body>
                    <Card.Title>{event.eventName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{event.eventshDesc}</Card.Subtitle>
                    <Card.Text>Date:{event.eventDate}</Card.Text>
                </Card.Body>
            </Card>
        )
}

export default EventSummary;