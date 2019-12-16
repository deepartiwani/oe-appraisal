const initState = {
    logindata: {},
};

const reducer = (state = initState, action) => {
    switch (action.type) {
      case 'GET_USER_DETAILS_SUCCESS':
           return { ...state , logindata: '' };
      case 'GET_USER_DETAILS_FAILED':
           return { ...state }
      default: 
           return state;
    }
};

export default reducer;
