let tasks = []

let addBtnElement = document.getElementById('addBtn')
let inputElement = document.getElementById('input')
let resultElement = document.getElementById('result')

function renderTasks(){
    resultElement.innerHTML = ''
    tasks.forEach( (item, index) => {
        // resultElement.innerHTML += `
        //                             <div>
        //                                 <h1>${item}</h1>
        //                                 <button onClick=deleteTask(${index})>Delete</button>
        //                             </div>`


        let divElement = document.createElement('div')
        divElement.innerHTML = `
                                <h1 style="text-decoration: ${item.isCompleted ? 'line-through' : 'none'}">
                                    ${item.taskName}
                                    <button class='completeBtn'>${item.isCompleted ? "Undo" : "Complete"}</button>
                                </h1>
                                <button class='deleteBtn'>Delete</button>
                                `
        divElement.querySelector('.deleteBtn').addEventListener('click', ()=>{
            deleteTask(index)
        })

        divElement.querySelector('.completeBtn').addEventListener('click', ()=>{
            markComplete(index)
        })

        resultElement.appendChild(divElement)
    })
}

addBtnElement.addEventListener('click', ()=>{
    if (inputElement.value === '') {
        resultElement.innerHTML = "Input is Empty!"
        return
    }
    tasks.push({taskName: inputElement.value, isCompleted: false})
    renderTasks()
})


function deleteTask(index) {
    tasks.splice(index, 1)
    renderTasks()
}

function markComplete(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted
    renderTasks()
}