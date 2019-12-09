import axios from 'axios';

export function getAccessTokenLogin(body) {
    
    const getOrdersApi = `https://bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login`;
  
    return axios.post(getOrdersApi, body, 
        { headers : {
        authorization:"Bearer YWRtaW46YWRtaW4=",
        "content-type":"application/json"
        }}
    );
  }