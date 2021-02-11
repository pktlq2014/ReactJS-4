import axios from 'axios';
export default function API(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `https://602373ed6bf3e6001766b19a.mockapi.io/product/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}