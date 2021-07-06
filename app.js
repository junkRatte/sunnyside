const toggleMenu = document.getElementById("toggle-menu");
const navbarMenu = document.getElementById("navbar-menu")

toggleMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});