import * as axios from 'axios';
axios.defaults.withCredentials = true;

export function postVendors(postData){
    const url = 'http://ec2-18-218-124-201.us-east-2.compute.amazonaws.com:8001/api/v2/searchprovider',
        data = postData

    return axios.post(url, data)
}