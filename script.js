// script.js - Component Loader + Dark Mode + UI Enhancements

console.log("Portfolio script loaded.");

/* -------------------------------
   DARK MODE TOGGLE
--------------------------------*/
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change icon
    if (document.body.classList.contains("dark-mode")) {
      toggle.textContent = "☀️";
    } else {
      toggle.textContent = "🌙";
    }
  });
}

/* -------------------------------
   MARK EXTERNAL LINKS
--------------------------------*/
setTimeout(() => {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => link.classList.add("external-link"));
}, 300);

/* -------------------------------
   FADE-IN ANIMATION FOR COMPONENTS
--------------------------------*/
function fadeInElements() {
  document.querySelectorAll('section, header, footer').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    el.style.transition = "all 0.6s ease";

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0px)";
    }, 100);
  });
}

// Run fade-in
window.addEventListener("load", fadeInElements);

/* -------------------------------
   SMOOTH SCROLL (if needed)
--------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
