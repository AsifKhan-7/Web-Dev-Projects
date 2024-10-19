let todoList = JSON.parse(localStorage.getItem("todos")) || [
  {
    item: "Code",
    dueDate: "2024-10-18",
  },
  {
    item: "Coffee",
    dueDate: "2024-10-18",
  },
];

displayTodos();

function addTodo() {
  let todoInput = document.getElementById("todo-input");
  let todoDate = document.getElementById("todo-date");
  let todoItem = todoInput.value;
  let todoDateEle = todoDate.value;
  if (todoItem && todoDateEle) {
    // Check if inputs are not empty
    todoList.push({ item: todoItem, dueDate: todoDateEle });
    localStorage.setItem("todos", JSON.stringify(todoList)); // Save todos to localStorage
    todoInput.value = "";
    todoDate.value = "";
    displayTodos();
  } else {
    alert("Please enter both item and due date.");
  }
}

function displayTodos() {
  let todoContainer = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `

    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="delete-btn" onclick = "deleteTodo(${i})">Delete</button>
    `;
  }
  todoContainer.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todoList)); // Update localStorage after deletion
  displayTodos(); // Update the displayed todos after deletion
}
