const listEl = document.querySelector(".todos");

export const createUi = (todos) => {
  listEl.innerHTML = '';

  todos.forEach(({ id, text, time, isComplited }) => {
    const li = document.createElement("li");
    if(isComplited) li.classList.add("complated")
    const textEl = document.createElement("p");
    textEl.textContent = text;
    const divEl = document.createElement("div")
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteBtn.style.color = "red"
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        
        const newTodos = todos.filter((todo) => todo.id !== id);
        
        localStorage.setItem("todos", JSON.stringify(newTodos));
        
        if (newTodos.length === 0) {
          localStorage.removeItem("todos");
        }
    
        createUi(newTodos);
        location.reload();
        });
   
    const editBtn = document.createElement("button")
      editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`
      
      editBtn.addEventListener("click", (e) => {
          e.stopPropagation();
      })
      
      divEl.classList.add("flex") 
      
    divEl.append(editBtn, deleteBtn)
    li.append(textEl, divEl);

    li.addEventListener("click", () => {
      const newTodos = todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : todo;
      });

        
        createUi(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    });

    listEl.append(li);
  });
};