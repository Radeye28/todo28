document.getElementById("addTaskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const newTask = document.createElement("li");
    newTask.className = "taskItem";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            newTask.classList.add("completed");
        } else {
            newTask.classList.remove("completed");
        }
    });

    const taskText = document.createElement("span");
    taskText.className = "taskText";
    taskText.textContent = taskInput.value;

    const removeTask = document.createElement("span");
    removeTask.className = "removeTask";
    removeTask.textContent = "Remove";
    removeTask.addEventListener("click", function () {
        newTask.remove();
    });

    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(removeTask);
    taskList.appendChild(newTask);

    taskInput.value = "";
});