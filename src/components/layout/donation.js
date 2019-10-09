import React from 'react';
import NavBar from "./Navbar";
import Donate from './donate';
class Donation extends React.Component{
 
    render()
    {
        return(
            <div>
                <NavBar/>
                <Donate/>
            </div>
        )
    }
}

export default Donation;