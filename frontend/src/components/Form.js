import React from 'react';
import { useForm } from 'react-hook-form';
import closeIcon from '../assets/close.png';
import { useDispatch } from 'react-redux';
import { ADD_USER, SET_HAS_CHANGES, SET_IS_MODAL } from '../actions/index';
import { FormErros } from './FormErrors';

export const Form = ({columns}) => {
    const {
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(ADD_USER([data]))
        dispatch(SET_HAS_CHANGES(true))
        dispatch(SET_IS_MODAL(false))
    }

    return (
        <div className="details-modal">
            <img onClick={() => dispatch(SET_IS_MODAL(false))} className='close-icon' src={closeIcon} />
            <div className="details-modal-title">
                <h1>Add user</h1>
            </div>
            <FormErros columns={columns} errors={errors} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='add-form-input' placeholder='First Name' {...register('firstName', { required: true })} />
                <input className='add-form-input' placeholder='Last Name' {...register("lastName", { required: true })}/>
                <input className='add-form-input' placeholder='Street Name' {...register("streetName", { required: true })} />
                <input className='add-form-input' placeholder='House Number' {...register("houseNumber", { required: true })} />
                <input type="number" className='add-form-input' placeholder='Apartment Number (optional)' {...register("apartmentNumber", { required: false })} />
                <input className='add-form-input' placeholder='Postal Code' {...register("postalCode", { required: true })}/>
                <input className='add-form-input' placeholder='Town' {...register("town", { required: true })} />
                <input className='add-form-input' placeholder='Phone Number' {...register("phoneNumber", { required: true })} />
                <input type="date" className='add-form-input' placeholder='Date of Birth' {...register("dateOfBirth", { required: true })} />
                <input type="number" className='add-form-input' placeholder='Age' {...register("age", { required: true })} />
                <button className='addButton' type="submit">Add New User</button>
            </form>
        </div>
    )
}