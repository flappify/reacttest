import React from 'react';
import AdminNav from './adminNav';
import {Container,Row,Col} from 'react-bootstrap';
import Notification from './notification';
import FormTop from './formTop';
import DonationTop from './donationTop';
import QueriesTop from './queriesTop';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';

class Dashboard extends React.Component{
    render()
    {
      const {auth,helps,forms,donations}=this.props;
      console.log(helps);
      if(!auth.uid) return <Redirect to='/urna' />
        return(
            <div>
                <AdminNav/>
            <Container>
  <Row>
    <Col sm={5}><FormTop forms={forms}/></Col>
    <Col sm={5}><Notification/></Col>
  </Row>
  <Row>
    <Col sm={5}><DonationTop donations={donations}/></Col>
    <Col sm={5}><QueriesTop helps={helps}/></Col>
  </Row>
</Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth,
    helps:state.firestore.ordered.helpDesk,
    forms:state.firestore.ordered.forms,
    donations:state.donate.donations,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection:'forms',limit:3,orderBy:['createdAt','desc']},
      {collection:'donations',orderBy:['createdAt','desc']},
      {collection:'helpDesk',limit:3,orderBy:['dateTime','desc']},
  ])
)(Dashboard)