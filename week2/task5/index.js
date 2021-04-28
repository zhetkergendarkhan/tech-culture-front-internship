const httpClient = new HttpClient('https://jsonplaceholder.typicode.com/');

const result = document.getElementById('result')
const statusCode = document.getElementById('status_code')
const lastRequest = document.getElementById('last_request')
const btn = document.getElementById('btn')

let posts = []


httpClient.get('posts')
    .then(postsAPI => {
        posts = posts.concat(postsAPI)
        result.innerHTML = posts.map(
             (post)=> {
            return `<div class="post">
                       <h1>${post.id}</h1>
                       <p>${post.title}</p>
                       <p>${post.body}</p>
                    </div>`
        })
    })
lastRequest.innerText = `Last requested url: ${httpClient.get_last_request_url()}`
statusCode.innerText = `Status code: ${httpClient.get_last_response_status_code()}`


btn.addEventListener('click', e => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value

    httpClient.post('posts', {title, body})
        .then((post) => {
            posts.push(post)

        })
    lastRequest.innerText = `Last requested url:${httpClient.get_last_request_url()}`
    statusCode.innerText = `Status code:${httpClient.get_last_response_status_code()}`

    result.innerHTML =  posts.map(
         (post)=> {
            return `<div class="post">
                       <h1>${post.id}</h1>
                       <p>${post.title}</p>
                       <p>${post.body}</p>
                    </div>`
        })
    document.getElementById('title').value = ''
    document.getElementById('body').value = ''


})



