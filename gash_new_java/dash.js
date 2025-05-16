document.addEventListener("DOMContentLoaded", function () {
    let downloadsCount = document.getElementById('downloads-count');
    let filesUploaded = document.getElementById('files-uploaded');
    let activeUsers = document.getElementById('active-users');

    let downloads = 1200000;
    let files = 4500000;
    let users = 3000000;

    // Simple counter animation
    function animateCounter(target, value) {
        let count = 0;
        let increment = value / 10000000;
        let interval = setInterval(function () {
            count += increment;
            if (count >= value) {
                count = value;
                clearInterval(interval);
            }
            target.innerText = Math.round(count);
        }, 30);
    }

    animateCounter(downloadsCount, downloads);
    animateCounter(filesUploaded, files);
    animateCounter(activeUsers, users);
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

