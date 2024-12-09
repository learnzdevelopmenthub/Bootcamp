let emails = ["hello@mail.com", "hello1@mail.com", "test@mail.com"]
let resultElement = document.getElementById('result')


// let foundEmail = emails.find((item) => {
//     return item === "hello@mail.com"
// })

// if (foundEmail === undefined) {
//     resultElement.innerHTML = "Email is not found"
// } else {
//     resultElement.innerHTML = "Email is found"   
// }


document.getElementById('email').addEventListener('keyup', ()=>{
    let value = document.getElementById('email').value

    let foundEmail = emails.find((item) => {
        return item === value
    })

    if (foundEmail === undefined) {
        resultElement.innerHTML = "Email is not found"
    } else {
        resultElement.innerHTML = `Email is found: ${foundEmail}`  
    }
})