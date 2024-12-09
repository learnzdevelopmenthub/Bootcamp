let fruits = ["apple", "orange", "banana", "grapes"]
let resultElement = document.querySelector('#result')

fruits.forEach((item) => {
    resultElement.innerHTML += `<h1>${item}</h1>`
})


// let filteredFruits = fruits.filter((item) => {
//     return item.includes("p")
// })

document.querySelector('#search').addEventListener('keyup', ()=>{
    let key = document.querySelector('#search').value
    
    let filteredFruits = fruits.filter(item => item.includes(key))

    resultElement.innerHTML = ''

    filteredFruits.forEach((item) => {
        resultElement.innerHTML += `<h1>${item}</h1>`
    })
})