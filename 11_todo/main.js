let tasks = JSON.parse(localStorage.getItem('tasks')) || []

let addBtnElement = document.getElementById('addBtn')
let inputElement = document.getElementById('input')
let resultElement = document.getElementById('result')

renderTasks()


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
                                    <input type="checkbox" ${item.isCompleted ? 'checked' : ''}>
                                    ${item.taskName}
                                </h1>
                                <button class='deleteBtn'>Delete</button>
                                `
        divElement.querySelector('.deleteBtn').addEventListener('click', ()=>{
            deleteTask(index)
        })

        divElement.querySelector('input').addEventListener('change', ()=>{
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
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks()
})


function deleteTask(index) {
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks()
}

function markComplete(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks()
}