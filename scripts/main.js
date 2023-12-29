const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const navMenu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
    navMenu.style.display = "flex";
    btnMenu.style.display = "none";
    btnClose.style.display = "flex";
})
btnClose.addEventListener("click", () => {
    navMenu.style.display = "none";
    btnMenu.style.display = "block";
    btnClose.style.display = "none";
})