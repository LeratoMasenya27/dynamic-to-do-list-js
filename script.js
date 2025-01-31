document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and trim spaces

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Add event listener to remove the task
        removeButton.addEventListener("click", () => {
            taskItem.remove();
        });

        // Append button to list item, and item to the task list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for add button click
    addButton.addEventListener("click", addTask);

    // Event listener for pressing 'Enter' key inside input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
