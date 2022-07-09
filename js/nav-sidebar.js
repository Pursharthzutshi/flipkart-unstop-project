const navButton = document.querySelector(".nav-button");
const sidebar = document.querySelector(".sidebar");
const closeNavbarButton = document.querySelector(".close-nav-bar-button");

navButton.addEventListener("click", showSidebar);

closeNavbarButton.addEventListener("click", closeSidebar);

function showSidebar() {
    sidebar.style.marginLeft = "5px";

    sidebar.style.visibility = "visible";
}

function closeSidebar() {
    sidebar.style.marginLeft = "-70px";

    sidebar.style.visibility = "hidden";
}