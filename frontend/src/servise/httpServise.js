

export const httpService = async (url, method, payload, isMultiPartFormData = false) => {

    const uri = `http://localhost:1337/api/${url}`;

    //const accessToken = localStorage.getItem('token')
    const headers = {
        'Content-Type': 'application/json',
        //'Authorization': `Bearer ${accessToken}`,
    };

    let options = {
        method,
        headers,
    };
    if (payload) {
        options.body = JSON.stringify(payload);
    }
   
    const response = await fetch(uri, options);
    const data = await response.json();
  
    return data;
  
}