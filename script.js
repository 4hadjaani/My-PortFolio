const navButton = document.querySelector(".nav-b");
 const navMenu = document.querySelector(".nav-ul");


navButton.addEventListener("click", () => {
    navMenu.classList.toggle("new-ul");
})