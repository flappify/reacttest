import React from 'react';
import FormSummary from '../form/formSummary';
import {Link } from 'react-router-dom';
const FormTop=({forms})=>{
        return(
            <div>
                <h1>Form List</h1>
                {forms && forms.map(form=>{
                    return(
                        <Link to={'/urna/dashboard/application/'+form.id} key={form.id}>
                        <FormSummary form={form} key={form.id}/>
                        </Link>
                    )
                })}
            </div>
        )
}

export default FormTop;