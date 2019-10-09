import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'
import moment from 'moment';
const HelpDetails=(props)=>{
  const { help,auth}=props;
  if(!auth.uid) return <Redirect to='/urna/' />
  if(help){
      return(
          <div className="container section help-details">
          <div className="card z-depth-0">
              <span className="card-title">{help.name}</span>
              <p>{help.message}</p>
          </div>
      </div>
      )
  }
  else{
      return (
              <div className="conatiner center">
                  <p>Loading help...</p>
              </div>
          )
  }
}


const mapStateToProps=(state,ownProps)=>{
  const id=ownProps.match.params.id;
  const helps=state.firestore.data.helpDesk;
  const help=helps? helps[id] : null;
  return {
      help:help,
      auth:state.firebase.auth,
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {
          collection:'helpDesk'
      }
  ])
)(HelpDetails)
