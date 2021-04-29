

class HttpClient {
    base_url
    last_request_url
    last_response_status_code
    last_error_info

    constructor(base_url) {
        this.base_url = base_url
    }

    get_last_response_status_code() {
        return this.last_response_status_code
    }


    get_last_request_url() {
        return this.last_request_url
    }

    async get(endpoint) {
        this.last_request_url = this.base_url + endpoint
        loader.style.display = 'block'
        return await fetch(this.base_url.concat(endpoint))


            .then(response => {
                this.last_response_status_code = response.status
                if (!response.ok)
                    this.last_error_info = response.statusText

                else
                    return response.json()



            })
            .then((res) => {
                return res;

            });


    }

    async post(endpoint, inputValue) {
        return await fetch(this.base_url + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValue)
        }).then(response => {
            this.last_response_status_code = response.status
            if (!response.ok)
                this.last_error_info = response.statusText
            else
                return response.json()

        })
            .then((res) => {
                return res;
            });

    }


}
