// Update Task Counts
function updateCount() {

    const ids = {
        "TO DO": "todoCount",
        "IN Progress": "progressCount",
        "Review": "reviewCount",
        "Done": "doneCount"
    };

    for (let column in ids) {

        document.getElementById(ids[column]).textContent =
            kanbanData[column].length;
    }
}

// Create Task Card
function createTaskCard(task, column) {

    const card = document.createElement("div");

    card.className = "task-card";
    card.draggable = true;

    card.innerHTML = `
        <div class="task-content">
            <span class="task-name">${task.text}</span>
            <button class="delete-btn">✖</button>
        </div>
    `;

    card.addEventListener("dragstart", () => {

        card.classList.add("dragging");

        card.dataset.id = task.id;
        card.dataset.column = column;
    });

    card.addEventListener("dragend", () => {

        card.classList.remove("dragging");
    });

    card.querySelector(".task-name").onclick = () => {

        const newName =
            prompt("Edit Task", task.text)?.trim();

        if (newName) {

            task.text = newName;

            saveBoard();
        }
    };

    card.querySelector(".delete-btn").onclick = () => {

        kanbanData[column] =
            kanbanData[column].filter(
                t => t.id !== task.id
            );

        saveBoard();
    };

    return card;
}

// Render Board
function renderBoard() {

    document.querySelectorAll(".column").forEach(column => {

        const columnName =
            column.dataset.column;

        const taskList =
            column.querySelector(".task-list");

        taskList.innerHTML = "";

        kanbanData[columnName].forEach(task =>

            taskList.appendChild(
                createTaskCard(task, columnName)
            )
        );

        taskList.ondragover = e =>
            e.preventDefault();

        taskList.ondrop = () => {

            const dragged =
                document.querySelector(".dragging");

            if (!dragged) return;

            const taskId =
                Number(dragged.dataset.id);

            const fromColumn =
                dragged.dataset.column;

            if (fromColumn === columnName) return;

            const task =
                kanbanData[fromColumn].find(
                    t => t.id === taskId
                );

            if (!task) return;

            kanbanData[fromColumn] =
                kanbanData[fromColumn].filter(
                    t => t.id !== taskId
                );

            kanbanData[columnName].push(task);

            saveBoard();
        };
    });

    updateCount();
}