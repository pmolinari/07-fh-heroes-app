
export const ACTIONS = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'
}


const initialState = {
    logged: false
}

export const authReducer = (state = initialState, action) => {
 
    switch (action.type) {

        case ACTIONS.login:
            return {
                ...action.payload,
                logged: true
            }

        case ACTIONS.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }


}
