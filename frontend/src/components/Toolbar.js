import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataTableProvider from '../providers/DataTableProvider';
import { AddUser } from './AddUser';
import { SET_HAS_CHANGES, SET_IS_LOADING, SET_EDIT_INDEX, SUBMIT_USERS } from '../actions/index';
import Toast from '../providers/Notification';


export const Toolbar = ({ columns }) => {
    const dispatch = useDispatch();
    const currectUsers = useSelector(({ usersReducer }) => usersReducer);
    const hasChanges = useSelector(({ statusReducer }) => statusReducer.hasChanges);
    const isLoading = useSelector(({ statusReducer }) => statusReducer.isLoading);
    const isEditedDataValid = useSelector(({ statusReducer }) => statusReducer.isEditedDataValid);

    const handleSaveData = async () => {
        if(hasChanges && !isLoading) {
            if(isEditedDataValid) {
                dispatch(SET_IS_LOADING(true))

                let response = await DataTableProvider.submitUsers(currectUsers);
    
                dispatch(SET_IS_LOADING(false))
    
                if(response.status === 201){
                    dispatch(SET_HAS_CHANGES(false))
                    Toast.toastMessage('Your data has been successfully saved!', 'success')
                }
    
                dispatch(SET_EDIT_INDEX(null));
            }
            else {
                Toast.toastMessage('Data you are trying to save is invalid! Please fill in required fields and try again!', 'error')
            }
        }
    }

    const handleCancelData = async () => {
        if(hasChanges && !isLoading) {
            dispatch(SET_IS_LOADING(true))

            const users = await DataTableProvider.getUsers();

            dispatch(SET_IS_LOADING(false))

            if(users){
                dispatch(SET_HAS_CHANGES(false))
                dispatch(SUBMIT_USERS(users.data))
                dispatch(SET_EDIT_INDEX(null))
                Toast.toastMessage('Table edition has been cancelled!', 'info')
            }
            else {
                Toast.toastMessage('Connection to server failed', 'error')
            }

        }
    }

    return (
        <div className={`toolbar ${!isLoading ? '' : ' disable'}`}>
            <button className={`saveButton ${hasChanges ? '' : ' disable'}`} onClick={handleSaveData}>Save</button>
            <button className={`cancelButton ${hasChanges ? '' : ' disable'}`}onClick={handleCancelData}>Cancel</button>
            <AddUser columns={columns} />
        </div>
    )
}