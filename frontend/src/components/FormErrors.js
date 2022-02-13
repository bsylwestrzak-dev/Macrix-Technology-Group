import React from 'react';

export const FormErros = ({ columns, errors}) => {

    return Object.keys(errors).length ?  (
        <div className='form-errors'>
            <p>Pola: {Object.keys(errors).map((key, index) => errors[key] ? columns[key].label + ', ' : null )} są wymagane</p>
        </div> 
    ) : null
}