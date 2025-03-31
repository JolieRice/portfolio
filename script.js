// Project card interactivity
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    alert(`You clicked on ${card.dataset.project}`);
    // You can add more interactivity, like opening a modal with project details.
  });
});

// Contact form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you for your message!");
    // Here, you can add AJAX or other logic to send the form data to a server.
  } else {
    alert("Please fill in all fields.");
  }
});
