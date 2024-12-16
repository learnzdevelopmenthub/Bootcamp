let rootElement = document.querySelector("#root")
let accessToken = localStorage.getItem('accessToken')

if (!accessToken) {
    renderSignin()
} else {
    renderTodos()
}


function renderSignup() {
    rootElement.innerHTML = ''
    let divElement = document.createElement('div')
    divElement.innerHTML = `
                <div>
                    <label for="email">Email</label>
                    <input type="text" placeholder="Email" id="email">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password">
                </div>
                <button id="registerBtn">Register</button>
            `

    divElement.querySelector('#registerBtn').addEventListener('click', ()=>{
        registerAPICall()
    })

    rootElement.appendChild(divElement)
}

function renderSignin() {
    rootElement.innerHTML = ''
    let divElement = document.createElement('div')
    divElement.innerHTML = `
                <div>
                    <label for="email">Email</label>
                    <input type="text" placeholder="Email" id="email">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password">
                </div>
                <button id="signinBtn">Signin</button>
            `

    divElement.querySelector('#signinBtn').addEventListener('click', ()=>{
        signinAPICall()
    })

    rootElement.appendChild(divElement)
}


function renderTodos() {
    rootElement.innerHTML = ''
    let divElement = document.createElement('div')
    divElement.innerHTML = `
                <h1>Todo List</h1>
            `
    rootElement.appendChild(divElement)
}



function registerAPICall(){
    let registerURL = "https://todo-learnz-development-hubs-projects.vercel.app/register"
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    let obj = {
        email: email,
        password: password
    }

    fetch(registerURL, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {"Content-Type": "application/json"}
    }).then( response => {
        return response.json()
    }).then( data => {
        debugger
    })
}

function signinAPICall(){
    let signinURL = "https://todo-learnz-development-hubs-projects.vercel.app/login"
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    let obj = {
        username: email,
        password: password
    }

    fetch(signinURL, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {"Content-Type": "application/json"}
    }).then( response => {
        return response.json()
    }).then( data => {
        localStorage.setItem('accessToken', data.access_token)
        renderTodos()
    })
}