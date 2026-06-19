//search.js
document.getElementById("searchTaskBtn").onclick = () => {

    const search =
        prompt("Enter Task Name")
            ?.trim()
            .toLowerCase();

    if (!search) return;

    document.querySelectorAll(".task-card")
        .forEach(card => {

            const name =
                card.querySelector(".task-name")
                    .textContent
                    .toLowerCase();

            card.style.border =
                name.includes(search)
                    ? "3px solid red"
                    : "";
        });
};