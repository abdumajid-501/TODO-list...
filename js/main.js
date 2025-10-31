import { createUi } from "./updateUi.js"

const formEl = document.querySelector(".form")
const inputEl = document.querySelector((".input"))


const todos = JSON.parse(localStorage.getItem("todos")) || [];
createUi(todos)

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!inputEl.value.trim()) return 

    const todo = {
        id: Math.random(),
        text: inputEl.value,
        isComplited: false,
        time: "",
    }
    
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    createUi(todos);

    formEl.reset();
})


