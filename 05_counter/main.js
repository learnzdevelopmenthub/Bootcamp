document.getElementById('runBtn').addEventListener('click', ()=>{
    let resultElment = document.getElementById('result')
    let inputElement = document.getElementById('input')

    let limit = parseInt(inputElement.value)
    let number = 1;

    resultElment.innerHTML = ''

    while (number <= limit) {

        if (number === 5){
            break;
        }
        resultElment.innerHTML += `<h1>${number}</h1>`
        number ++
    }

    inputElement.value = ''
})