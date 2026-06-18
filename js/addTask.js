document.getElementById("addTaskBtn").onclick = () => {

    const taskName =
        prompt("Enter Task Name")
            ?.trim();

    if (!taskName) return;

    kanbanData["TO DO"].push({
        id: Date.now(),
        text: taskName
    });

    saveBoard();
};