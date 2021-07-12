// We must have a initial State
const initialState = {
    logInStatus: false,
    name: "",
    email: ""
}

function rootReducers(state = initialState, action) {
    switch(action.type) {
        
        case 'USER_IS_AUTH' :
            return { 
                ...state,
                logInStatus: action.LoginStatus 
            }
    
        case 'USER_NAME' :
            return { 
                ...state,
                name: action.userName 
            }

        case 'USER_EMAIL' :
            return { 
                ...state,
                email: action.userEmail 
            }

        default:
            return state
    }
}

export default rootReducers