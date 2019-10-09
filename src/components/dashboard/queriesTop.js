import React from 'react';
import HelpSummary from '../helpdesk/helpdeskSummary';
import {Link} from 'react-router-dom';
const QueriesTop=({helps})=>{
    console.log(helps);
        return(
            <div>
                <h1>Help Desk</h1>
                {helps && helps.map(help=>{
                    return(
                        <div>
                        <Link to={'/urna/dashboard/helpdesk/'+help.id} key={help.id}>
                        <HelpSummary help={help} key={help.id}/>
                        </Link>
                        </div>
                    )
                })}
            </div>
        )
}

export default QueriesTop;