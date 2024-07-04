const todoList = []
let todoListHTML = ""
renderTodoList()


function renderTodoList() {
    let todoListHTML = ""

    todoList.forEach((todoObject, index) => {

        const { name, dueDate } = todoObject
        const html = `
        <div class= " container" >
        <div class = "theDiv theDivTodoName">
        <p class="forWrappingText" >
        ${name}
        </p>
        </div>
        <div  class = " theDateDiv theDiv">
        ${dueDate}
        </div>
         <div class = "theDiv">
        <button class= "theDeleteButton">Delete</button>
       </div>
       </div>
        `
        todoListHTML += html

    })


    document.querySelector(".js-todo-list").innerHTML = todoListHTML
    document.querySelectorAll(".theDeleteButton").forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", () => {
            todoList.splice(index, 1)
            renderTodoList()
        })
    })
}
document.querySelector(".todo_button").addEventListener("click", () => {
    addTodo()
})

function addTodo() {
    const inputElement = document.querySelector(".js-name-input")
    const dateInputElement = document.querySelector(".js-due-date-input")
    const dueDate = dateInputElement.value
    const name = inputElement.value
    todoList.push({
        name,
        dueDate
    })
    inputElement.value = ""
    renderTodoList()
}


let div_p = document.querySelector(".div_p")