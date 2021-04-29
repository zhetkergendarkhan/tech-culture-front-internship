const httpClient = new HttpClient('https://jsonplaceholder.typicode.com/');

const result = document.getElementById('result')
const statusCode = document.getElementById('status_code')
const lastRequest = document.getElementById('last_request')
const btn = document.getElementById('btn')
const loader = document.querySelector('#loader')

let posts = []


httpClient.get('posts')
    .then(postsAPI => {
        posts = posts.concat(postsAPI)
        loader.style.display = 'none'
        result.innerHTML = posts.map(
             (post)=> {
            return `<div class="post">
                       <h1 class="post__id">${post.id}) Пост</h1>
                       <p class="post__title"><b>Название:</b> ${post.title}</p>
                       <p class="post__text"><b>Текст:</b> ${post.body}</p>
                    </div>`
        })
    })

lastRequest.innerHTML = `Last requested url: ${httpClient.get_last_request_url()}`
statusCode.innerHTMl = `Status code: ${httpClient.get_last_response_status_code()}`


btn.addEventListener('click', e => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value

    httpClient.post('posts', {title, body})
        .then((post) => {
            posts.push(post)

        })
    lastRequest.innerHTML = `Last requested url:${httpClient.get_last_request_url()}`
    statusCode.innerHTML = `Status code:${httpClient.get_last_response_status_code()}`

    result.innerHTML =  posts.map(
         (post)=> {
            return `<div class="post">
                       <h1 class="post__id">${post.id}) Пост</h1>
                       <p class="post__title"><b>Название:</b> ${post.title}</p>
                       <p class="post__text"><b>Текст:</b> ${post.body}</p>
                    </div>`
        })
    document.getElementById('title').value = ''
    document.getElementById('body').value = ''


})



