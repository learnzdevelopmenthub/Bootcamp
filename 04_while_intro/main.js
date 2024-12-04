document.getElementById('startBtn').addEventListener('click', ()=>{

    let totalRound = parseInt(document.getElementById('round').value)
    let currentRound = 1;
    let resultElment = document.getElementById('result');

    resultElment.innerHTML = ''

    while (currentRound <= totalRound) {
        resultElment.innerHTML += `<h1>Lap ${currentRound} is completed</h1>`
        currentRound++;
    }

})


// if condition, else if, else
// comparision operator
// logical operator
// includes
// while, increment
// type casting (parseInt)
// += append operator
