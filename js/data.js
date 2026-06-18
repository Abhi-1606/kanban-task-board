//data.js
// Default Tasks
const defaultTasks = {
    "TO DO": [
        { id: 1, text: "Create Wireframe" },
        { id: 2, text: "Design Layout" }
    ],
    "IN Progress": [
        { id: 3, text: "Build UI" }
    ],
    "Review": [
        { id: 4, text: "Testing" }
    ],
    "Done": []
};

// Load Data
let kanbanData =
    JSON.parse(localStorage.getItem("kanbanBoard")) ||
    defaultTasks;

// Save Data
function saveBoard() {
    localStorage.setItem(
        "kanbanBoard",
        JSON.stringify(kanbanData)
    );

    renderBoard();
}