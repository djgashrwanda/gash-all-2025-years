// Get the form and the upload button
const form = document.getElementById('file-upload-form');
const uploadButton = document.getElementById('upload-button');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    // Perform basic validation
    const fileName = document.getElementById('file-name').value;
    const fileAuthor = document.getElementById('file-author').value;
    const fileDescription = document.getElementById('file-description').value;
    const fileInput = document.getElementById('file-input').files[0];

    if (!fileName || !fileAuthor || !fileDescription || !fileInput) {
        alert("Please fill in all fields and select a file.");
        return;
    }

    // Simulate file upload (replace with actual upload code)
    alert("File uploaded successfully!");

    // Reset the form after submission
    form.reset();
});



const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});