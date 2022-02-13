const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'SUBMIT_USERS':
            return [...action.payload]
        case 'ADD_USER':
            return [...state, ...action.payload]
        case 'DELETE_USER':
            return state.filter((user, index) => index !== action.payload)
        case 'UPDATE_USER':
            return state.map((user, index) => {
                if(index == action.payload.index) {
                    user[action.payload.key] = action.payload.value
                }
                return user
            })
        default:
            return state;    
    }
}

export default usersReducer;