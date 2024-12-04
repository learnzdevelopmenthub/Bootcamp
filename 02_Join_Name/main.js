document.querySelector('#joinBtn').addEventListener('click', ()=>{
    let firstName = document.querySelector('#firstname').value
    let lastName = document.querySelector('#lastname').value
    
    if (firstName === '' || lastName === '') {
        document.querySelector('#result').innerHTML = "Please fill the all fields"
    } else {
        document.querySelector('#result').innerHTML = `${firstName} ${lastName}`
    }
})

// event handling
// function, function call
// ways of event handling
// varible
// ways to write funtion
// + operator
// template literals