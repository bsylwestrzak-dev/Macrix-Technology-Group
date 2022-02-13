export const SUBMIT_USERS = users => {
    return {
        type: 'SUBMIT_USERS',
        payload: users
    }
}

export const ADD_USER = user => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const DELETE_USER = id => {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}

export const UPDATE_USER = (index, key, value)=> {
    return {
        type: 'UPDATE_USER',
        payload: {
            index,
            key,
            value
        }
    }
}

export const SET_HAS_CHANGES = (value) => {
    return {
        type: 'SET_HAS_CHANGES',
        payload: value
    }
}

export const SET_IS_LOADING = (value) => {
    return {
        type: 'SET_IS_LOADING',
        payload: value
    }
}

export const SET_EDIT_INDEX = (index) => {
    return {
        type: 'SET_EDIT_INDEX',
        payload: index
    }
}

export const SET_IS_MODAL = (value) => {
    return {
        type: 'SET_IS_MODAL',
        payload: value
    }
}

export const SET_IS_EDITED_DATA_VALID = (value) => {
    return {
        type: 'SET_IS_EDITED_DATA_VALID',
        payload: value
    }
}