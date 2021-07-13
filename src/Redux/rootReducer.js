// We must have a initial State
const initialState = {
    logInStatus: false,
    name: "",
    email: "",
    userProfilPhoto: "",
    posts: []
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

        case 'USER_PHOTO' :
            return { 
                ...state,
                userProfilPhoto: action.userPhoto 
            }

        case 'POSTS' : 
            return {
                ...state,
                posts: action.posts
            }

        default:
            return state
    }
}

export default rootReducers