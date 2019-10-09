import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../actions/authActions';
import {Nav} from 'react-bootstrap';
const SignOut=(props)=>{
    return(
        <Nav.Link href="/" onClick={props.signOut}>Log Out</Nav.Link>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignOut);