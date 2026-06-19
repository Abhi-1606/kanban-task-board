//task.js
// Add Task
function addTask() {
    const taskName =
        prompt("Enter Task Name")?.trim();

    if (!taskName) return;

    kanbanData["TO DO"].push({
        id: Date.now(),
        text: taskName
    });

    saveBoard();
}