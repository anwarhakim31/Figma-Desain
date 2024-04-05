const nav = document.querySelector(".primary-navigation");
const berger = document.querySelector(".humberger");

berger.addEventListener("click", function () {
  nav.classList.toggle("active");
});
