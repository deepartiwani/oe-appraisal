export const getUserDetailsSaga = (requestBody) => ({
    type: 'GET_USER_DETAILS',
    payload: { requestBody },
});

export const getUserDetailsSuccess = (data) => ({
    type: 'GET_USER_DETAILS_SUCCESS',
    data,
});

export const getUserDetailsFailed = (data) => ({
    type: 'GET_USER_DETAILS_FAILED',
    data,
  });