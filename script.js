document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple form validation
  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    return;
  }

  // Display form data (For demo purposes)
  alert(`Thank you, ${name}. Your message has been sent!`);

  // Clear form fields
  document.getElementById("contactForm").reset();
});
