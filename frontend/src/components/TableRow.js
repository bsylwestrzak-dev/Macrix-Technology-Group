import React from 'react';
import noDataIcon from '../assets/file.png'

export const TableRow = ({row, columns }) => {

    return (
        <>
            {Object.keys(row).map((key, index) => 
                <th key={index}>{row[key] ? row[key] : <img class='no-data-icon' src={noDataIcon} />  }</th>
            )} 
        </>
    )
}