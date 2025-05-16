// Get the form and submit button
const form = document.getElementById('contact-form');
const submitButton = document.getElementById('contact-submit');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    // Perform basic validation
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate form submission
    alert("Your message has been sent successfully!");

    // Reset form after submission
    form.reset();
});






const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});