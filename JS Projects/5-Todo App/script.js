let todoList = ["Code", "Coffee", "Sleep"];
displayTodos();

function addTodo() {
  let todoInput = document.getElementById("todo-input");
  let todoItem = todoInput.value;
  todoList.push(todoItem);
  todoInput.value = "";
  displayTodos();
}

function displayTodos() {
  let todoContainer = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    newHtml += `
    <div>
    <span>${todoList[i]}</span>
    <button onclick = "todoList.splice(${i},1);">Delete</button>
    </div>`;
  }
  todoContainer.innerHTML = newHtml;
}
