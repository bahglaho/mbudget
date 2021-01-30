export const addUser = (user) => {
	return {
		type: 'ADD_USER',
		user,
	};
};

export const getUser = () => {
    return {
        type: 'GET_USER',
    }
}

export const loggedIn=()=>{
	return{
		type: 'LOG_IN',
	};
};

export const loggedOut=()=>{
	return{
		type: 'LOG_OUT',
	};
};

export const addTiers = (tiers) => {
	return {
		type: 'ADD_TIER',
		tiers,
	};
};

export const getTiers = () => {
    return {
        type: 'GET_TIER',
    };
};
//Demande
export const addDemande = (demande) => {
	return {
		type: 'ADD_DEMANDE',
		demande,
	};
};

export const getDemande = () => {
    return {
        type: 'GET_DEMANDE',
    };
};

export const delDemande = (demande) => {
    return {
		type: 'DEL_DEMANDE',
		demande,
    };
};

