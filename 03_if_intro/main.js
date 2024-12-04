// let isRaining = false;

// if (isRaining) {
//     document.querySelector('#result').innerHTML = "Take an Umberlla!"
// }


document.getElementById('actionBtn').addEventListener('click', ()=>{
    let weather = document.getElementById('input').value;

    if (weather.includes("rain")) {
        document.querySelector('#result').innerHTML = "Take an Umberlla!"
    } else if (weather === 'hot') {
        document.querySelector('#result').innerHTML = "Take a Cooling glass"
    } else {
        document.querySelector('#result').innerHTML = "Nothing needed"
    }
})