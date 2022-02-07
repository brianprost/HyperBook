const axios = require('axios');


const base_url = "http://hyperbookappapi.azurewebsites.net";

export async function loginUser(data) {
    const response = await axios.post(base_url + '/api/HyperBook/Login', {user: data});
    return response.data;
        //  .then((res)=>{
        //    if(res.data === 'SUCCESS') {
        //      //user logged in
        //    } else if(res.data === 'FAILURE') {
        //      //login failed
        //    }})
        //  .catch(err) {
        //    console.error(err)
        //  }
}