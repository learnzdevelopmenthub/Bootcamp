// let fruits = ["apple", "orange", "banana", "grape"]

// fruits.forEach((item, index)=>{
//     document.getElementById('result').innerHTML += `<h1>${index} - ${item}</h1>`
// })


let fruits = [];

document.getElementById('addBtn').addEventListener('click', ()=>{
    let value = document.getElementById('fruit').value
    fruits.push(value)


    document.getElementById('result').innerHTML = ''

    fruits.forEach( (item) => {
        document.getElementById('result').innerHTML += `<h1>${item}</h1>`
    });
})


// while practical
// continue
// break
// array, push, pop, shift, unshift, splice, position
// forEach
