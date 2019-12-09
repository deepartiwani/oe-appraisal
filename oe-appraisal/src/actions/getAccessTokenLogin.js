export const getAccessTokenLogin = (requestBody) => ({
    type: 'GET_ACCESS_TOKEN',
    payload: { requestBody },
});

export const getAccessTokenSuccess = (data) => ({
    type: 'GET_ACCESS_TOKEN_SUCCESS',
    data,
});

export const getAccessTokenFailed = (data) => ({
    type: 'GET_ACCESS_TOKEN_FAILED',
    data,
  });