import React from 'react';
import {Card} from 'react-bootstrap';

const DonationSummary=({donation})=>{
        return(
            <Card >
                <Card.Body>
                    <Card.Title>{donation.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{donation.amt}</Card.Subtitle>
                    <Card.Text>Date:</Card.Text>
                </Card.Body>
            </Card>
        )
}

export default DonationSummary;