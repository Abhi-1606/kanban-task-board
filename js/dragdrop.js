function moveTask(
    taskId,
    fromColumn,
    toColumn
) {

    const task =
        kanbanData[fromColumn].find(
            t => t.id === taskId
        );

    if (!task) return;

    kanbanData[fromColumn] =
        kanbanData[fromColumn].filter(
            t => t.id !== taskId
        );

    kanbanData[toColumn].push(task);

    saveBoard();
}