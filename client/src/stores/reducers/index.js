const initialState ={
    user : null,
    isLoggedIn : false
}
export default (state = initialState, action) => {

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
                isLoggedIn: true
            }
            
        case 'LOG_OUT' :
            return {
                ...state,
                isLoggedIn:false,
                user:null
            }
        case 'GET_TIER':
            return {
               ...state,
            }
    
        case 'ADD_TIER':
            return {
               ...state,
               tiers:  action.tiers
            }
        case 'GET_DEMANDE':
            return {
                ...state,
            }
    
        case 'ADD_DEMANDE':
            return {
                ...state,
                demande:  action.demande
            }
            case 'DEL_DEMANDE':
                return {
                    ...state,
                    demande:  action.demande
                }

        default:
            return state
    }

}