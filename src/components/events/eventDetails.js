import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../layout/Navbar';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Card} from 'react-bootstrap';
const EventDetails=(props)=>{
    const {event}=props;
      return(
        <div>
            <NavBar/>
            <Card>
  <Card.Img variant="top" src={event.url} />
  <Card.Body>
    <Card.Title>{event.eventName}</Card.Title>
    <Card.Text>
      Description:{event.eventDesc}
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
      )
}
const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id;
    const events=state.firestore.data.events;
    const event=events? events[id] : null;
    return {
        event:event,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:'events'
        }
    ])
)(EventDetails);