//theme.js
const themeBtn =
    document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add(
        "light-mode"
    );
}

themeBtn.onclick = () => {

    document.body.classList.toggle(
        "light-mode"
    );

    localStorage.setItem(
        "theme",
        document.body.classList.contains(
            "light-mode"
        )
            ? "light"
            : "dark"
    );
};