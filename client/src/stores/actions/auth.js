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

export const loggedIn=(user)=>{
	return{
		type: 'LOG_IN',
		user
	};
};

export const loggedOut=()=>{
	return{
		type: 'LOG_OUT',
	};
};

