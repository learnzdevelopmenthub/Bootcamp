// user can able to create a task 
// user can view all created tasks
// user can mark task as complete
// user can delete a task from existing list

let tasks = [];
let resultElement = document.getElementById('result')
let inputElement = document.getElementById('taskInput')

// create a task
document.getElementById('addBtn').addEventListener('click', ()=>{
    let taskName = inputElement.value
    tasks.push(taskName)
    renderTasks()
    inputElement.value = ''
})

function renderTasks(){
    resultElement.innerHTML = ''
    tasks.forEach( (item, index) => {
        resultElement.innerHTML += `
                                    <div style="margin-top: 1rem">
                                        <input type='checkbox' id="check-${index}" onChange="markComplete(${index})">
                                        <span id="item-${index}">${item}</span>
                                        <button onClick="deleteTask(${index})">Delete</button>
                                    </div>
                                    `

    })
}


function markComplete(index) {
    let taskElement = document.getElementById(`item-${index}`)
    let currentCheckElement = document.getElementById(`check-${index}`)

    if (currentCheckElement.checked) {
        taskElement.style.textDecoration = 'line-through'
    } else {
        taskElement.style.textDecoration = 'none'
    }
}



function deleteTask(index) {
    tasks.splice(index, 1)
    renderTasks()
}