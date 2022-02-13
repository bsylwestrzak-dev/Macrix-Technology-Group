import React from 'react';

export const TableHeader = ({ columns }) => {

    return (
            <thead>
                <tr>
                    {Object.keys(columns).map(key => 
                        <th key={key}>{columns[key].label}</th>
                    )}
                </tr>
            </thead>
    )
}