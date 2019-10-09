import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import SignOut from './signOut';
class AdminNav extends React.Component{
    render()
    {
      const {profile}=this.props;
        return(
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">AIEF</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/urna/dashboard/form">Forms</Nav.Link>
      <Nav.Link href="/urna/dashboard/donation">Donations</Nav.Link>
      <Nav.Link href="/urna/dashboard/helpdesk">Queries</Nav.Link>
      <Nav.Link href="/urna/dashboard/CreateEvent">Create Event</Nav.Link>
      <Nav.Link href="/">Go Back to Website</Nav.Link>
      <SignOut profile={profile}/>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}
const mapStateToProps=(state)=>{
  return {
      profile:state.firebase.profile
  }
}
export default connect(mapStateToProps)(AdminNav);