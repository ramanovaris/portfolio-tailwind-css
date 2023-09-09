// NavBar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const scroolToTop = document.querySelector("#scroll-to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    scroolToTop.classList.remove("hidden");
    scroolToTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    scroolToTop.classList.add("hidden");
    scroolToTop.classList.remove("flex");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar Humberger
window.addEventListener("click", function (e) {
  if (e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const html = document.querySelector("html");
const toggleDark = document.querySelector("#toggle-dark");

toggleDark.addEventListener("click", function () {
  if (toggleDark.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
