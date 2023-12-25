// to make executable of add task button
document
  .querySelector(".js-addTaskButtonOnClick")
  .addEventListener("click", () => {
    addTodo();
  });

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

// All to do list are being stored here
let todo_list = [];

// addTodo() will add the task
function addTodo() {
  // getting userInputted value
  const todo_task = document.querySelector(".js-to-do-input");
  const todo_task_value = todo_task.value;
  const todo_date = document.querySelector(".js-to-do-date-input");
  const todo_date_value = todo_date.value;

  // pushing task and date to the list
  todo_list.push({
    todo_task_value,
    todo_date_value,
  });

  console.log(todo_list);
  todo_task.value = "";
  renderToDo();
}

function renderToDo() {
  let todoListHtml = "";

  todo_list.forEach(function (toDoObject, index) {
    const { todo_task_value, todo_date_value } = toDoObject;
    todoListHtml += `
       <div class="task">${todo_task_value}</div>
       <div class="date">${todo_date_value}</div>
       <button 
             class="delete-todo-button js-delete-todo-button">Delete</button>`;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todo_list.splice(index, 1);
        renderToDo();
      });
    });
}
