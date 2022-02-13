const defaultState = {
    hasChanges: false,
    isLoading: false,
    editIndex: null,
    isModal: false,
    isEditedDataValid: true
}

const statusReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SET_HAS_CHANGES':
            return {...state, hasChanges: action.payload}
        case 'SET_IS_LOADING':
            return {...state, isLoading: action.payload}
        case 'SET_EDIT_INDEX':
            return  {...state, editIndex: action.payload}   
        case 'SET_IS_MODAL':
            return  {...state, isModal: action.payload}    
        case 'SET_IS_EDITED_DATA_VALID':   
            return {...state, isEditedDataValid: action.payload}
        default:
            return state;    
    }
}

export default statusReducer;