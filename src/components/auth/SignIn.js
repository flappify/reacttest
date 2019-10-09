import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {signIn} from '../../actions/authActions';
import {Redirect} from 'react-router-dom';
import NavBar from '../layout/Navbar';
class SignIn extends React.Component{
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render()
    {
      const {authError,auth}=this.props
      if(auth.uid) return <Redirect to='/urna/dashboard' />
        return(
            <div>
            <NavBar/>
              <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id="password" placeholder="Password" onChange={this.handleChange} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <div className="red-text center">{authError ? <p>{authError}</p>:null}</div>
</Form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return{
      authError:state.auth.authError,
      auth:state.firebase.auth
  }
}
const mapDispathToProps=(dispatch)=>{
  return{
      signIn:(creds)=>dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps,mapDispathToProps)(SignIn);