import React from 'react';
var Insta = require('instamojo-nodejs');
class Donate extends React.Component{
    handleClick=()=>{
        const data = new Insta.PaymentData();
        Insta.isSandboxMode(false);
        data.purpose = "Test";
        data.amount = 100;
        data.buyer_name="Saahil";
        data.redirect_url="localhost:3000/donate";
        data.email="saahil@gmail.com";
        data.phone="8017036489";
        data.send_email=false;
        data.webhook="http://www.example.com/webhook/";
        data.send_sms=false;
        data.allow_repeated_payments=false;
        console.log(data);
        Insta.setKeys("2174bc349768d79d753f828c9a81542d","6f9ca35591181fbc75ed27499d76a163");
        Insta.createPayment(data, function(error, response) {
            if (error) {
              console.log(error);
            } else {
              // Payment redirection link at response.payment_request.longurl
              console.log(response);
            }
          });
    }
    render()
    {
    return(
        <button onClick={this.handleClick}>PAY</button>
    )
    }
}

export default Donate;