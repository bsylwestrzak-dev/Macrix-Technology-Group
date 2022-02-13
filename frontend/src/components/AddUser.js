import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_MODAL } from '../actions/index';
import { Form } from './Form';

export const AddUser = ({ columns }) => {
    const dispatch = useDispatch();
    const isModal = useSelector(({ statusReducer }) => statusReducer.isModal);

    const handleModal = () => {
        dispatch(SET_IS_MODAL(true))
    }

    return (
        <>
            <button className={`addButton ${!isModal ? '' : ' disable'}`} onClick={handleModal}>Add user</button>
            {isModal ? <Form columns={columns} handleModal={handleModal} isModal={isModal} /> : null}
        </>
    )
}
