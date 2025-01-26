// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    // Select the "Add Task" button and store it in a constant named addButton
const addButton = document.getElementById('add-task-btn');

// Select the input field where users enter tasks and store it in a constant named taskInput
const taskInput = document.getElementById('task-input-btn');

// Select the unordered list that will display the tasks and store it in a constant named taskList
const taskList = document.getElementById('task-list-btn');
    

    // Define the addTask function
    function addTask() {
        // Get the task input value
        const taskText = taskInput.value.trim(); // Remove extra spaces
    
        // Check if the task input is not empty
        if (taskText !== "") {
            // Create a new li element
            const newTask = document.createElement("li");
    
            // Set the text content of the li element to the task text
            newTask.textContent = taskText;
    
            // Create a new remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");
    
            // Add an onclick event to remove the li element when the button is clicked
            removeButton.onclick = function() {
                taskList.removeChild(newTask);
            };
    
            // Append the remove button to the li element
            newTask.appendChild(removeButton);
    
            // Append the li element to the task list
            taskList.appendChild(newTask);
    
            // Clear the task input field
            taskInput.value = "";
        }
    }    
    
    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add an event listener to the input field for the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});