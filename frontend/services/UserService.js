const axios = require('axios');

const base_url = "https://hyperbookappapi.azurewebsites.net";

export async function loginUser(p1, p2) {
    const response = await axios.get(base_url + `/api/HyperBook/Login?email=${p1}&password=${p2}`);
    return response;
        
}