const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.classList.add("open");

function openMenu() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
    menuBtn.classList.remove("open");
}

function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
    menuBtn.classList.add("open");
}

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (sidebar.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener("click", closeMenu);

document.addEventListener("click", (e) => {
    if (
        sidebar.classList.contains("open") &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        closeMenu();
    }
});