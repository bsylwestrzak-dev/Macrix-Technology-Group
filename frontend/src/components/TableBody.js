import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER, SET_EDIT_INDEX, SET_HAS_CHANGES } from '../actions/index';
import { EditRow } from './EditRow';
import { TableRow } from './TableRow';

export const TableBody = ({ data, columns }) => {
    const dispatch = useDispatch();
    const editIndex = useSelector(({ statusReducer }) => statusReducer.editIndex)

    const deleteUser = (index) => {
        if(window.confirm('Na pewno chcesz usunąć wskazany wiersz?')){
            dispatch(SET_EDIT_INDEX(null));
            dispatch(DELETE_USER(index));
            dispatch(SET_HAS_CHANGES(true))
        }
    }

    const isEnter = e => {
        if (e.which === 13) {
            e.preventDefault();
            dispatch(SET_EDIT_INDEX(null));
          }
    }

    return (
        <tbody>
            {data.map((row, index) => 
                <tr key={index}>
                    { editIndex === index ? <EditRow columns={columns} isEnter={isEnter} row={row} index={index} /> : <TableRow row={row} /> }
                    <th>{editIndex == null ? <button onClick={() => dispatch(SET_EDIT_INDEX(index))} className="editButton">Edit</button> : <button onClick={() => dispatch(SET_EDIT_INDEX(null))} className="editButton">Done</button> }</th>
                    <th><button onClick={() => deleteUser(index)} className="deleteButton">Delete</button></th>
                </tr>   

            )}
        </tbody>
    )
}