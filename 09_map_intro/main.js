let numbers = [1, 3, 2, 5, 8]

let processedNumbers = numbers.map((item)=> {
    return item * 2
})

processedNumbers.forEach((item)=>{
    document.getElementById('result').innerHTML += `<h1>${item}</h1>`
})



