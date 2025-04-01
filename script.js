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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImages = document.getElementById("modal-images");
  const modalDescription = document.getElementById("modal-description");
  const modalClose = document.querySelector(".modal-close");

  document.querySelectorAll(".work-item").forEach((item) => {
    item.addEventListener("click", () => {
      modalTitle.textContent = item.getAttribute("data-title");
      modalDescription.textContent = item.getAttribute("data-description");

      // Get the images from data-images and display them
      const images = item.getAttribute("data-images").split(",");
      modalImages.innerHTML = ""; // Clear previous images

      images.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = "Project Image";
        imgElement.classList.add("modal-image");
        modalImages.appendChild(imgElement);
      });

      modal.style.display = "flex";
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
