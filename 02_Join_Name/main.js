document.querySelector('#joinBtn').addEventListener('click', ()=>{
    let firstName = document.querySelector('#firstname').value
    let lastName = document.querySelector('#lastname').value

    document.querySelector('#result').innerHTML = `${firstName} ${lastName}`
})