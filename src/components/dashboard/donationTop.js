import React from 'react';
import DonationSummary from '../donation/donationSummary';
const DonateTop=({donations})=>{
        return(
            <div>
                <h1>Donation List</h1>
                {donations && donations.map(donation=>{
                    return(
                        <DonationSummary donation={donation} key={donation.id}/>
                    )
                })}
            </div>
        )
}

export default DonateTop;