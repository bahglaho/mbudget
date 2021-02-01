
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

