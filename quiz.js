document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const resetButton = document.getElementById("resetButton");
    const taskList = document.getElementById("taskList");
    const clickCounter = document.getElementById("clickCounter");

    let counter = 0;

    // Add task function
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;

            // Mark as done
            li.addEventListener("click", () => {
                li.classList.toggle("done");
                if (li.classList.contains("done")) {
                    counter++;
                } else {
                    counter--;
                }
                clickCounter.textContent = counter;
            });

            taskList.appendChild(li);
            taskInput.value = ""; // Clear input field
        }
    });

    // Reset list function
    resetButton.addEventListener("click", () => {
        taskList.innerHTML = ""; // Clear the task list
        counter = 0; // Reset counter
        clickCounter.textContent = counter; // Update counter display
    });
});
