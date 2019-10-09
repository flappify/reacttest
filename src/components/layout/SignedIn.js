import React from 'react';
import {Nav} from 'react-bootstrap';


class SignedIn extends React.Component{
    render()
    {
        return(
                <Nav.Link href="/urna">Admin Control</Nav.Link>
        )
    }
}

export default SignedIn;