import React from 'react';
import {Card} from 'react-bootstrap';

const FormSummary=({form})=>{
        return(
            <Card >
                <Card.Body>
                    <Card.Title>{form.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{form.occ}</Card.Subtitle>
                    <Card.Text>Date</Card.Text>
                </Card.Body>
            </Card>
        )
}

export default FormSummary;