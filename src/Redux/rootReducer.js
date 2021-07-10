// We must have a initial State
const initialState = {
    logInStatus: false
}

function rootReducers(state = initialState, action) {
    switch(action.type) {
        
        case 'USER_IS_AUTH' :
            return { 
                ...state,
                logInStatus: action.LoginStatus 
            }

        default:
            return state
    }
}

export default rootReducers