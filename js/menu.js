const toggleLabel = document.querySelector(".nav-toggle-label");
const navBar = document.querySelector(".nav-bar");

toggleLabel.addEventListener("click", () => {
  navBar.classList.toggle("active");
  toggleLabel.classList.toggle("active");
});

document.querySelectorAll(".nav-bar a").forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    toggleLabel.classList.remove("active");
  });
});
