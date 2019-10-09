import React from 'react';
import EventSummary from '../events/eventSummary';
import {Link} from 'react-router-dom';
const Events=({events})=>{
        return(
            <div>
                <h1>Events</h1>
                {events && events.map(event=>{
                    return(
                        <Link to={'/events/'+event.id} key={event.id}>
                        <EventSummary event={event} key={event.id}/>
                        </Link>
                    )
                })}
            </div>
        )
}

export default Events;