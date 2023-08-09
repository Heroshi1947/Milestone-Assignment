function addTodo() {
    const inputField = document.getElementById("todoInput");
    const todoText = inputField.value;
  
    if (todoText !== "") {
      // Create a new list item element
      const newTodoItem = document.createElement("li");
      newTodoItem.textContent = todoText;
  
      // Get the TODO list and append the new item
      const todoList = document.getElementById("todoList");
      todoList.appendChild(newTodoItem);
  
      inputField.value = "";
    }
  }