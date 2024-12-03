// function changeText() {
//     document.querySelector('#paragraph1').innerHTML = 'Paragraph 1 Changed'
// }

// function expression
// let changeText = function (){
//     document.querySelector('#paragraph1').innerHTML = 'Paragraph 1 Changed'
// }

// arrow function

let changeText = () => {
    document.querySelector('#paragraph1').innerHTML = 'Paragraph 1 Changed'
}


// document.getElementById('changeBtn').onclick = function(){
//     changeText()
// }

let changeBtn = document.getElementById('changeBtn')

changeBtn.addEventListener('click', function(){
    changeText()
})

changeBtn.addEventListener('mouseover', function(){
    console.log("Working")
})