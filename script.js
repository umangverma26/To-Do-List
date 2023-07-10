// Function to create a new task
function createTask() {
    const taskInput = document.getElementById("task-input");
    const taskDeadline = document.getElementById("task-deadline");
    const taskPriority = document.getElementById("task-priority");
  
    if (taskInput.value === "") {
      alert("Please enter a task description");
      return;
    }
  
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task " + taskPriority.value + "-priority";
    taskItem.innerHTML = `
      <span>${taskInput.value} - Due by: ${taskDeadline.value}</span>
      <div>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
      </div>
    `;
  
    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskDeadline.value = "";
    taskPriority.value = "low";
  
    // Add event listeners for edit and delete buttons
    const editButton = taskItem.querySelector(".edit-button");
    const deleteButton = taskItem.querySelector(".delete-button");
  
    editButton.addEventListener("click", function () {
      editTask(taskItem);
    });
  
    deleteButton.addEventListener("click", function () {
      deleteTask(taskItem);
    });
  }
  
  // Function to edit a task
  function editTask(taskItem) {
    const taskText = taskItem.querySelector("span").textContent;
    const newTaskText = prompt("Enter the new task description:", taskText);
  
    if (newTaskText) {
      taskItem.querySelector("span").textContent = newTaskText;
    }
  }
  
  // Function to delete a task
  function deleteTask(taskItem) {
    taskItem.remove();
  }
  
  // Handle form submission
  const taskForm = document.getElementById("task-form");
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    createTask();
  });
  