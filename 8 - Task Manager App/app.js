// 1. Select DOM Elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// 2. Create event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// 3. Function to add the task
function addTodo(event) {
    event.preventDefault();
    // console.log("Type:", event.type);
    // console.log("Target Element:", event.target);

    // Create todoDiv container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create todo list item
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.textContent = todoInput.value;
    todoDiv.appendChild(newTodo);
    console.log(todoDiv);

    // Create the complete button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fas fa-check"></i>'; 
    todoDiv.appendChild(completeButton);

    // Create the trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; 
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteOrCompleteTodo (event) {
    const targetBtn = event.target;
    if (targetBtn.classList.contains("complete-btn")){
        const todoDiv = targetBtn.parentElement;
        todoDiv.classList.toggle("completed");
    }

    if (targetBtn.classList.contains("trash-btn")){
        const todoDiv = targetBtn.parentElement;
        todoDiv.classList.add("fall");
        todoDiv.addEventListener("transitionend", function () {
            todoDiv.remove();
        });
    }
}

function filterTodos (event) {
    const filterValue = event.target.value;
    const todos = todoList.childNodes;
    todos.forEach(function (todoDiv){
        if (filterValue === "all") {
            todoDiv.style.display = "flex";
        } else if (filterValue === "completed") {
            if (todoDiv.classList.contains("completed")) {
                todoDiv.style.display = "flex";
            } else {
                todoDiv.style.display = "none";
            }
        } else if (filterValue === "uncompleted") {
            if (!todoDiv.classList.contains("completed")) {
                todoDiv.style.display = "flex";
            } else {
                todoDiv.style.display = "none";
            }
        }
    });
}