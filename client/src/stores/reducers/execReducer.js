
export default (state = {}, action) => {

    switch (action.type) {

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