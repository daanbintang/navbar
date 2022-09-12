const nav = document.querySelector("nav ul");
const humb = document.querySelector(".humb");
humb.addEventListener("click", function () {
  nav.classList.toggle("hide");
});
