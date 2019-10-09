import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import {Image} from 'react-bootstrap';
const FormDetails=(props)=>{
  const { form,auth}=props;
  if(!auth.uid) return <Redirect to='/urna/' />
  if(form){
      return(
          <div className="container section help-details">
          <div className="card z-depth-0">
              <span className="card-title">{form.name}</span>
              <p>{form.phone}</p>
              <p>{form.email}</p>
          </div>
          <Image src={form.url} rounded/>
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
  const forms=state.firestore.data.forms;
  const form=forms? forms[id] : null;
  return {
      form:form,
      auth:state.firebase.auth,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {
          collection:'forms'
      }
  ])
)(FormDetails);