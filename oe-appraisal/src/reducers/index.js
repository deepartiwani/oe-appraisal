const initState = {
    logindata: {},
};

const reducer = (state = initState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
           return { ...state , logindata: '' };
      case 'LOGIN_FAILED':
           return { ...state }
      default: 
           return state;
    }
};

export default reducer;
