// script.js

document.addEventListener("DOMContentLoaded", () => {
  const patternSection = document.querySelector(".patterned");

  // Subtle hover effect
  patternSection.addEventListener("mouseenter", () => {
    patternSection.style.opacity = "0.8";
  });

  patternSection.addEventListener("mouseleave", () => {
    patternSection.style.opacity = "1";
  });

  // Floating effect for header
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.transform = "translateY(-10px)";
      header.style.opacity = "0.9";
    } else {
      header.style.transform = "translateY(0)";
      header.style.opacity = "1";
    }
  });
});
