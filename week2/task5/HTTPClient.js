
class HttpClient{

    BASE_URL
    last_request_url
    last_response_status_code
    last_error_info

    constructor(BASE_URL) {
        this.BASE_URL = BASE_URL
    }


    async get(endpoint) {
        this.last_request_url = this.BASE_URL + endpoint

        return fetch(this.BASE_URL.concat(endpoint))
            .then(response => {
                this.last_response_status_code = response.status
                if(response.ok)
                    return response.json();
                else
                    this.last_error_info = response.statusText
            })
            .then((json) => {
                return json;
            });
    }

    async post(endpoint, data = {}) {
        return  await fetch(this.BASE_URL+endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(
            response => {
                this.last_response_status_code = response.status
                if(response.ok)
                    return response.json();
                else
                    this.last_error_info = response.statusText
            })
            .then((json) => {
                    return json;
                }
            ).catch((e)=> console.log('error'));

    }

    get_last_response_status_code(){
        return this.last_response_status_code
    }


    get_last_request_url(){
        return this.last_request_url
    }
}
