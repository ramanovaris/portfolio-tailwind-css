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
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Remember State Toggle
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  toggleDark.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  toggleDark.checked = false;
}
