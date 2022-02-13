import React from 'react';
import noData from '../assets/no-data.png'

export const EmptyData = () => {
    return (
        <div className='empty-data-container'>
            <img className="empty-data-img" src={noData} />
            <p>You do not have any users here. </p>
            <p>Click ADD USER to get started!</p>
        </div>
    )
}