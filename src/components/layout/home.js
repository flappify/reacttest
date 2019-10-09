import React from 'react';
import Navbar from './Navbar';
import Events from "./events";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect } from 'react-redux-firebase';
class Home extends React.Component{
    render()
    {
        const {events}=this.props;
        return(
            <div>
                <Navbar/>
                <Events events={events}/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
      events:state.firestore.ordered.events,
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'events',limit:3,orderBy:['createdAt','desc']},
    ])
  )(Home);