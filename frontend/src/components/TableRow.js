import React from 'react';
import noDataIcon from '../assets/file.png'

export const TableRow = ({row}) => {

    return (
        <>
            {Object.keys(row).map((key, index) => 
                <th key={index}>{row[key] ? row[key] : <img className='no-data-icon' src={noDataIcon} />  }</th>
            )} 
        </>
    )
}