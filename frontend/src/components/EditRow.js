import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_USER } from '../actions';
import { SET_HAS_CHANGES, SET_IS_EDITED_DATA_VALID } from '../actions/index';

export const EditRow = ({columns, row, index, isEnter}) => {
    const currectRow = useSelector(({ usersReducer}) => usersReducer)[index];
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(UPDATE_USER(index, e.target.name, e.target.value))
        dispatch(SET_HAS_CHANGES(true));

        if(!columns[e.target.name].optional && e.target.value.length == 0){
            dispatch(SET_IS_EDITED_DATA_VALID(false));
        }
        else {
            dispatch(SET_IS_EDITED_DATA_VALID(true));
        }
    }

    return (
         <>
            {Object.keys(row).map((key, index) => 
                <th key={index}>
                    <input 
                        type={columns[key].type} 
                        readOnly={columns[key].readonly}
                        className={`edit-input ${ columns[key].optional || ('' + currectRow[key]).length > 0 ? '' : ' invalid'}`}
                        onKeyPress={isEnter}
                        name={key}
                        key={index}
                        defaultValue={currectRow[key]}
                        onChange={handleChange}  
                    />
                </th>
            )} 
        </>
    )
}