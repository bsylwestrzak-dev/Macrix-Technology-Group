import React, { useEffect, useState } from 'react';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import DataTableProvider from '../providers/DataTableProvider';
import { useSelector, useDispatch } from 'react-redux';
import { SUBMIT_USERS } from '../actions/index';
import { Toolbar } from './Toolbar';
import { EmptyData } from './EmptyData';
import Toast from '../providers/Notification';

export const Table = () => {
    const dispatch = useDispatch();

    const [columns, setColumns] = useState([]);

    const users = useSelector(({usersReducer}) => usersReducer);

    useEffect(() => {

        (async function(){
            let users = await DataTableProvider.getUsers();
            if(users){
                setColumns(users.columns);
                dispatch(SUBMIT_USERS(users.data))
            }
            else {
                Toast.toastMessage('Connection to server failed', 'error')
            }
        })()

    }, [])

    

    return (
        <div className='main'>
            <div className='table-container'> 
                {
                users.length ? 
                <table border="0" cellSpacing="0" cellPadding="10" >
                    <TableHeader columns={columns}/>
                    <TableBody data={users} columns={columns}/> 
                </table>
                :
                <EmptyData />
                }
            </div>
            <Toolbar columns={columns} />
        </div>
    ) 
}