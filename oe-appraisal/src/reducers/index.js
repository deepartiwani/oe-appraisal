const initState = {
    logindata: {},
};

const reducer = (state = initState, action) => {
    switch (action.type) {
      case 'GET_ACCESS_TOKEN_SUCCESS':
           return { ...state , logindata: '' };
      case 'GET_ACCESS_TOKEN_FAILED':
           return { ...state }
      default: 
           return state;
    }
};

export default reducer;
