const initialState ={
    user : null,
    isLoggedIn : false
}
export default (state = {}, action) => {

    switch (action.type) {

        case 'GET_USER':
            return {
                ...state
            }

        case 'ADD_USER':
            return {
                ...state,
                user:  action.user
            }

        case 'LOG_IN' :
            return {
                ...state,
                user: action.user,
                isLoggedIn: true
            }
            
        case 'LOG_OUT' :
            return {
                ...state,
                isLoggedIn:false,
                user:null
            }
        
        default:
            return state
    }

}